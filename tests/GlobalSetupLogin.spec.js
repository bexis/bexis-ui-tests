import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';


setup('Authenticate', async ({ page }) => {
  await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  await page.getByLabel('Email or Username').click();
  await page.getByLabel('Email or Username').fill('');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('');
  await page.getByRole('button', {name: 'Log in'}).click();
  console.log(await page.title());
  await expect(page).toHaveTitle('BExIS - News');

  //Save the state of the web-page
  await page.context().storageState({path: authFile})

})
