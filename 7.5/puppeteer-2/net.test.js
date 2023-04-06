const { expect, config } = require("chai");
const { FormatterBuilder } = require("cucumber");
const { clickElement, getText} = require("./lib/commands.js");

let page;

beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
    page.close();
});

 
test("Should book one ticket", async () => {
  await clickElement(page, "a:nth-child(2) > span.page-nav__day-week"); 
  await clickElement(page, "a.movie-seances__time");  
  await clickElement(page, ".buying-scheme__chair_standart:not(.buying-scheme__chair_taken)"); 
  await clickElement(page, "button.acceptin-button"); 
  const actual = await getText(page, "h2.ticket__check-title");
  expect(actual).contain("Вы выбрали билеты:");
});

test("Should buy two tickets", async () => {
  await clickElement(page, "a:nth-child(2) > span.page-nav__day-week"); 
  await clickElement(page, "a.movie-seances__time");  
  await clickElement(page, ".buying-scheme__chair_standart:not(.buying-scheme__chair_taken)"); 
  await clickElement(page, "button.acceptin-button"); 
  const actual = await getText(page, "h2.ticket__check-title");
  expect(actual).contain("Вы выбрали билеты:");
});


test("Should not be able to book taken chair", async () => {
      await clickElement(page,"body > nav > a:nth-child(3) > span.page-nav__day-number");
      await clickElement(page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(2) > a");
      pageNext = await browser.newPage();
      await pageNext.goto("https://qamid.tmweb.ru/client/hall.php");
      await clickElement(page,"body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span.buying-scheme__chair.buying-scheme__chair_vip.buying-scheme__chair_taken");
      const actual = await page.$eval(".acceptin-button", (link) => link.getAttribute("disabled"));
      expect(actual).equal("true");
});