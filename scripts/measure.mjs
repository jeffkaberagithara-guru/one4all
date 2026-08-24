import { chromium } from 'playwright-core'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const base = process.argv[2] || 'http://localhost:5199'
const routes = process.argv[3] ? process.argv[3].split(',') : ['/']

const browser = await chromium.launch({ executablePath: EDGE, headless: true })

for (const [w, h, label] of [[1440, 900, 'desktop'], [390, 844, 'mobile']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } })
  const page = await ctx.newPage()
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: 'networkidle', timeout: 25000 }).catch(() => {})
    await page.evaluate(async () => {
      await new Promise((d) => { let y = 0; const s = () => { y += 700; scrollTo(0, y); y < document.body.scrollHeight ? setTimeout(s, 50) : d() }; s() })
      scrollTo(0, 0)
    })
    await page.waitForTimeout(500)
    const report = await page.evaluate(() => {
      const secs = [...document.querySelectorAll('header, main > section, main > div > section')]
        .filter((el) => el.getBoundingClientRect().height > 0)
        .map((el) => {
          const r = el.getBoundingClientRect()
          return {
            tag: el.tagName.toLowerCase(),
            label: (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby') || el.id || el.className || '').toString().slice(0, 40),
            top: Math.round(r.top + scrollY),
            h: Math.round(r.height),
          }
        })
      // images: rendered box aspect vs natural aspect
      const imgs = [...document.querySelectorAll('img')].map((el) => {
        const r = el.getBoundingClientRect()
        return {
          src: (el.currentSrc || '').split('/').pop(),
          w: Math.round(r.width), h: Math.round(r.height),
          nw: el.naturalWidth, nh: el.naturalHeight,
          pos: getComputedStyle(el).objectPosition,
        }
      })
      return { secs, imgs, total: document.body.scrollHeight, vw: innerWidth }
    })
    console.log(`\n===== ${label} ${route} vw=${report.vw} pageH=${report.total}`)
    let prev = null
    for (const s of report.secs) {
      const gap = prev ? s.top - (prev.top + prev.h) : 0
      console.log(`${gap > 2 ? String(gap).padStart(5) + 'px GAP before | ' : '                  '}h=${String(s.h).padStart(5)} ${s.tag} ${s.label}`)
      prev = s
    }
    for (const i of report.imgs) {
      if (!i.w) continue
      const box = (i.w / i.h).toFixed(2); const nat = (i.nw / i.nh).toFixed(2)
      const flag = Math.abs(i.w / i.h - i.nw / i.nh) > 0.25 ? ` <-- crop ${nat}->${box} pos=${i.pos}` : ''
      console.log(`   img ${i.w}x${i.h} (${box}) ${i.src}${flag}`)
    }
  }
  await ctx.close()
}
await browser.close()
