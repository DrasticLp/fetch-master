const puppeteer = require("puppeteer");
const pptExtra = require("puppeteer-extra");

/**
 * 
 * @returns {pptExtra.PuppeteerExtra}
 */
function getPuppeteer() {
    let ppt = new pptExtra.PuppeteerExtra(puppeteer);

    return ppt;
}

module.exports = { getPuppeteer };
