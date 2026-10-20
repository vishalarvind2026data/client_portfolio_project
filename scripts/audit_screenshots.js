const puppeteer = require('puppeteer');
const path = require('path');

const ARTIFACT_DIR = '/Users/arvind_govindaraj/.gemini/antigravity-ide/brain/02b93a31-2c34-4bd2-913c-cf48458ffbee';

async function main() {
  console.log('Launching Puppeteer for latest visual audit...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Wait for preloader to finish
  await new Promise(r => setTimeout(r, 1400));

  console.log('Capturing Stage 01: Hero...');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'clean_01_hero.png') });

  console.log('Capturing Stage 02: Yacht Architecture (Assembled 0%)...');
  await page.evaluate(() => {
    document.getElementById('yacht-design-section')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'clean_02_yacht_assembled.png') });

  console.log('Capturing Stage 02B: Yacht Architecture (Dismantled 100%)...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const dismantleBtn = btns.find(b => b.textContent && b.textContent.includes('DISMANTLED DECKS'));
    if (dismantleBtn) dismantleBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'clean_02b_yacht_dismantled.png') });

  console.log('Capturing Stage 03: Yachting Experience (All 3 Houses with Actual Images)...');
  await page.evaluate(() => {
    document.getElementById('experience-section')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'clean_03_yachting_experience.png') });

  console.log('Capturing Stage 04: Dual Education...');
  await page.evaluate(() => {
    document.getElementById('education-section')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'clean_04_education.png') });

  console.log('Capturing Stage 05: Credentials & Skills Telemetry...');
  await page.evaluate(() => {
    document.getElementById('skills-section')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'clean_05_skills.png') });

  console.log('Capturing Stage 06: Contact Desk...');
  await page.evaluate(() => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'clean_06_contact.png') });

  await browser.close();
  console.log('All clean audit screenshots captured successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
