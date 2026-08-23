import { chromium } from 'playwright-core'
const b = await chromium.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless: true })
const p = await b.newPage()
const errs = []
p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 200)) })
p.on('pageerror', (e) => errs.push('PAGEERROR ' + String(e).slice(0, 200)))
await p.goto(process.argv[2] || 'https://jeffkaberagithara-guru.github.io/one4all/ueber-uns', { waitUntil: 'networkidle', timeout: 30000 })
await p.waitForTimeout(1500)
const title = await p.title()
const h1 = await p.evaluate(() => document.querySelector('h1')?.textContent || '')
const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map((i) => ({ src: i.currentSrc.split('/').pop(), ok: i.naturalWidth > 0 })))
console.log(JSON.stringify({ title, h1, errs: [...new Set(errs)], imgs }, null, 1))
await b.close()
