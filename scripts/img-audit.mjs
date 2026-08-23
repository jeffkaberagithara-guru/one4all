import { chromium } from 'playwright-core'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const bases = process.argv.slice(2)
if (!bases.length) {
  console.error('usage: node scripts/img-audit.mjs <base-url> [more]')
  process.exit(1)
}

const browser = await chromium.launch({ executablePath: EDGE, headless: true })

function classifyImg(i) {
  const r = i.rect
  const problems = []
  if (!i.complete) problems.push('not-loaded')
  else if (i.naturalWidth === 0) problems.push('broken-src')
  if (r.w === 0 || r.h === 0) problems.push(`zero-box(${r.w}x${r.h})`)
  if (Number(i.opacity) === 0) problems.push('opacity-0')
  if (i.visibility === 'hidden' || i.display === 'none') problems.push(`css-${i.visibility || i.display}`)
  return problems
}

async function auditRoute(page, url, viewportLabel) {
  const consoleErrors = []
  const pageErrors = []
  const badResponses = []
  const onConsole = (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 200)) }
  const onPageError = (e) => pageErrors.push(String(e).slice(0, 200))
  const onResponse = (res) => { if (res.status() >= 400) badResponses.push(`${res.status()} ${res.url()}`) }
  page.on('console', onConsole); page.on('pageerror', onPageError); page.on('response', onResponse)

  let status = 0
  try { const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 }); status = resp ? resp.status() : 0 } catch { /* continue with what loaded */ }

  // scroll through to trigger lazy-loading and whileInView animations
  await page.evaluate(async () => {
    await new Promise((done) => {
      let y = 0
      const step = () => {
        y += 400
        window.scrollTo(0, y)
        if (y < document.body.scrollHeight) setTimeout(step, 60)
        else done()
      }
      step()
    })
  })
  await page.waitForLoadState('networkidle').catch(() => {})
  await page.waitForTimeout(700)

  const report = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')].map((el) => {
      const r = el.getBoundingClientRect()
      const cs = getComputedStyle(el)
      return {
        src: el.currentSrc || el.getAttribute('src') || '',
        alt: el.getAttribute('alt'),
        complete: el.complete,
        naturalWidth: el.naturalWidth,
        rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
        opacity: cs.opacity,
        visibility: cs.visibility,
        display: cs.display,
      }
    })
    const collapsedFigures = [...document.querySelectorAll('figure')]
      .filter((f) => { const r = f.getBoundingClientRect(); return r.height < 2 && r.width >= 2 })
      .map((f) => f.className.slice(0, 80))
    return {
      title: document.title,
      imgs,
      collapsedFigures,
      hscroll: document.documentElement.scrollWidth > window.innerWidth + 1,
    }
  })

  const problems = report.imgs.map((i) => ({ ...i, problems: classifyImg(i) })).filter((i) => i.problems.length)
  const path = new URL(url).pathname
  console.log(`\n=== ${viewportLabel} ${path} [${status}] imgs=${report.imgs.length} broken=${problems.length} hscroll=${report.hscroll}`)
  if (problems.length) {
    const seen = new Set()
    for (const p of problems) {
      const key = `${p.src}|${p.problems.join(',')}`
      if (seen.has(key)) continue
      seen.add(key)
      console.log(`  IMG ${p.problems.join('+')} ${p.rect.w}x${p.rect.h} op=${p.opacity} ${p.src}`)
    }
  }
  if (report.collapsedFigures.length) console.log(`  COLLAPSED FIGURES: ${report.collapsedFigures.length}`, report.collapsedFigures.slice(0, 3))
  if (badResponses.length) console.log(`  HTTP>=400:`, [...new Set(badResponses)].slice(0, 8))
  if (pageErrors.length) console.log(`  PAGEERRORS:`, [...new Set(pageErrors)].slice(0, 4))
  if (consoleErrors.length) console.log(`  CONSOLE:`, [...new Set(consoleErrors)].slice(0, 4))

  page.off('console', onConsole); page.off('pageerror', onPageError); page.off('response', onResponse)
  return { path, imgs: report.imgs.length, broken: problems.length }
}

for (const base of bases) {
  console.log(`\n########## ${base} ##########`)
  for (const vp of [{ label: 'desktop', width: 1280, height: 800 }, { label: 'mobile ', width: 390, height: 780 }]) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
    const page = await ctx.newPage()
    // discover routes from homepage
    await page.goto(base + '/', { waitUntil: 'networkidle', timeout: 25000 }).catch(() => {})
    const hrefs = await page.evaluate(() =>
      [...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href')))
    const routes = [...new Set(['/', ...hrefs])]
      .filter((h) => !h.startsWith('/images'))
      .slice(0, 40)
    let totals = { imgs: 0, broken: 0 }
    for (const r of routes) {
      try { const t = await auditRoute(page, base + r, vp.label); totals.imgs += t.imgs; totals.broken += t.broken }
      catch (e) { console.log(`  ROUTE FAIL ${r}: ${String(e).slice(0, 120)}`) }
    }
    console.log(`-- ${vp.label} TOTAL imgs=${totals.imgs} problem-instances=${totals.broken}`)
    await ctx.close()
  }
}
await browser.close()
