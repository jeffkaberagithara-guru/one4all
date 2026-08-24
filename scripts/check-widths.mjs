import { chromium } from 'playwright-core'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const base = process.argv[2] || 'http://localhost:5199'
const browser = await chromium.launch({ executablePath: EDGE, headless: true })
for (const w of [375, 480, 768]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 800 } })
  const page = await ctx.newPage()
  for (const r of ['/', '/ueber-uns', '/leistungen/vrf-systeme', '/projekte/klimatisierung-buerogebaeude', '/kontakt']) {
    await page.goto(base + r, { waitUntil: 'networkidle' })
    await page.waitForTimeout(300)
    const hs = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    console.log(`${w}px ${r} ${hs > 1 ? 'OVERFLOW +' + hs + 'px' : 'ok'}`)
  }
  await ctx.close()
}
await browser.close()
