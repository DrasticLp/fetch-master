import { Browser, Page } from 'puppeteer';
import { getPuppeteer } from '../src/ppt';

const puppeteer = getPuppeteer();

get('https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/Rudran%20Sama').then((r) => {
  console.log(r);
});

async function get(link: string) {
  const browser: Browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(true);
  await page.setDefaultNavigationTimeout(0);
  await page.goto(link);
  const bodyHTML = await page.evaluate(() => document.body.innerHTML);
  await browser.close();
  return bodyHTML;
}

export {get}