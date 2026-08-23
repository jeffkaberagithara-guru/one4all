import { chromium } from 'playwright-core'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const base = process.argv[2] || 'http://localhost:5199'
const browser = await chromium.launch({ executablePath: EDGE, headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.evaluate(async () => {
  await new Promise((d) => { let y = 0; const s = () => { y += 400; scrollTo(0, y); y < document.body.scrollHeight ? setTimeout(s, 50) : d() }; s() })
})
await page.waitForTimeout(500)
const out = await page.evaluate(() => {
  const pick = (el) => {
    const cs = getComputedStyle(el)
    const r = el.getBoundingClientRect()
    return {
      tag: el.tagName.toLowerCase(),
      cls: (el.className || '').toString().slice(0, 70),
      rect: `${Math.round(r.width)}x${Math.round(r.height)}@y${Math.round(r.y + scrollY)}`,
      opacity: cs.opacity,
      transform: cs.transform !== 'none' ? cs.transform.slice(0, 60) : '',
      scale: cs.scale,
      vis: cs.visibility,
      disp: cs.display,
      contentVisibility: cs.contentVisibility,
      containIntrinsic: cs.containIntrinsicSize,
    }
  }
  return [...document.querySelectorAll('figure')].filter((f) => f.getBoundingClientRect().height < 2).map((f) => {
    const chain = []
    let el = f
    for (let i = 0; i < 7 && el && el.tagName !== 'SECTION'; i++) { chain.push(pick(el)); el = el.parentElement }
    const img = f.querySelector('img')
    return { figure: pick(f), imgRect: img ? pick(img) : null, chain }
  })
})
for (const o of out) {
  console.log('\nFIGURE', JSON.stringify(o.figure))
  if (o.imgRect) console.log('  IMG  ', JSON.stringify(o.imgRect))
  for (const c of o.chain.slice(1)) console.log('  ^', JSON.stringify(c))
}
console.log('\ncount:', out.length)
await browser.close()
