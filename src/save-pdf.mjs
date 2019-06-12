import puppeteer from 'puppeteer'
import { parseCliArgs } from './helpers/cli-args-parser'

async function savePdf(url, savePath) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.pdf({ path: savePath, format: 'A4' })

    await browser.close()
}

const argv = parseCliArgs(process.argv)

if (!argv.url || !argv.savePath) {
    console.warn('Usage: npm run save-pdf -- --url <url> --savePath <savePath>')
    process.exit(1)
}

(async () => {
    await savePdf(argv.url, argv.savePath)
})()
