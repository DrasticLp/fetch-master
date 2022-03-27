"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ppt_1 = require("../src/ppt");
const puppeteer = (0, ppt_1.getPuppeteer)();
get('https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/Rudran%20Sama').then((r) => {
    console.log(r);
});
function get(link) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch();
        const page = yield browser.newPage();
        yield page.setJavaScriptEnabled(true);
        yield page.setDefaultNavigationTimeout(0);
        yield page.goto(link);
        const bodyHTML = yield page.evaluate(() => document.body.innerHTML);
        yield browser.close();
        return bodyHTML;
    });
}
