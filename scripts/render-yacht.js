const puppeteer = require('puppeteer-core');
const path = require('path');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--enable-webgl', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  await page.evaluate(() => {
    const el = document.getElementById('yacht-sticky-scroll-container');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 500));

  const outDir = '/Users/arvind_govindaraj/.gemini/antigravity-ide/brain/02b93a31-2c34-4bd2-913c-cf48458ffbee';
  await page.screenshot({ path: path.join(outDir, 'preview_assembled.png') });

  // Scroll to mid-disassembly
  await page.evaluate(() => {
    window.scrollBy({ top: 1200, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(outDir, 'preview_disassembled.png') });

  await browser.close();
  console.log('Preview screenshots captured!');
}

capture().catch(console.error);
