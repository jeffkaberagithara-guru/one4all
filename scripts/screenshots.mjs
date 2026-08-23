import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const base = process.argv[2] || 'http://localhost:5199'
const outDir = process.argv[3] || 'C:\\Users\\USER\\AppData\\Local\\Temp\\opencode\\one4all-preview'
mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch({ executablePath: EDGE, headless: true })
const routes = [
  ['/', 'home'],
  ['/leistungen/vrf-systeme', 'service-vrf'],
  ['/projekte/klimatisierung-buerogebaeude', 'project-buero'],
  ['/ueber-uns', 'about'],
  ['/kontakt', 'contact'],
]
for (const [w, h, label] of [[1440, 900, 'desktop'], [390, 844, 'mobile']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } })
  const page = await ctx.newPage()
  for (const [route, name] of routes) {
    await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 })
    await page.evaluate(async () => {
      await new Promise((d) => { let y = 0; const s = () => { y += 600; scrollTo(0, y); y < document.body.scrollHeight ? setTimeout(s, 80) : d() }; s() })
      scrollTo(0, 0)
    })
    await page.waitForTimeout(800)
    await page.screenshot({ path: `${outDir}\\${label}-${name}.png`, fullPage: true })
    console.log(`saved ${label}-${name}.png`)
  }
  await ctx.close()
}
await browser.close()
