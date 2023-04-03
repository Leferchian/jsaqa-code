const user = require('../user.js');
const { test, expect  } = require("@playwright/test");


test ('successful login', async ({page}) => {
  await page.goto("https://netology.ru/?modal=sign_in", {timeout : 1000000});
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]',user.email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]',user.password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL('https://netology.ru/profile');
  await expect(page.locator('.src-components-pages-Profile-Programs--title--Kw5NH')).toHaveText('Мои курсы и профессии');
});
test ('unsuccessful login', async ({page}) => {
  await page.goto("https://netology.ru/?modal=sign_in", {timeout : 600000});
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]','qwerty@email.ru');
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]','qwerty');
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
});