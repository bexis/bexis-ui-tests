import { test as setup, expect } from '@playwright/test';

export const host = process.env.HOST;

const user = process.env.ACCOUNT_USERNAME
const password = process.env.ACCOUNT_PASSWORD

const authFile = 'playwright/.auth/user.json';

setup('Authenticate', async ({ page }) => {
  await page.goto(`${host}/Account/Login`);
  await page.getByLabel('Email or Username').click();
  await page.getByLabel('Email or Username').fill(user);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', {name: 'Log in'}).click();
  console.log(await page.title());
  await expect(page).toHaveTitle('BExIS - News');

  //Save the state of the web-page
  await page.context().storageState({path: authFile})

})
