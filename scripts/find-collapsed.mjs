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
  return [...document.querySelectorAll('figure')].filter((f) => f.getBoundingClientRect().height < 2).map((f) => {
    const sec = f.closest('section')
    const prevText = f.previousElementSibling?.textContent?.slice(0, 40) || ''
    const nextText = f.nextElementSibling?.textContent?.slice(0, 40) || ''
    return {
      hasImg: !!f.querySelector('img'),
      hasSvg: !!f.querySelector('svg'),
      parentClasses: (f.parentElement?.className || '').toString().slice(0, 90),
      sectionClass: (sec?.className || '').toString().slice(0, 70),
      prevText, nextText,
    }
  })
})
console.log(JSON.stringify(out, null, 1))
console.log('collapsed count:', out.length)
await browser.close()
