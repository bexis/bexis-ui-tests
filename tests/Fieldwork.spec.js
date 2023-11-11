const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on Fieldwork and open News', async ({page})=>
{

    await page.getByRole('button', {name: 'Fieldwork'}).click();
    await page.getByRole('link', {name: 'News'}).nth(0).click();
    await expect(page).toHaveTitle('BExIS - News');

});

test(' Click on Fieldwork and open Calendar', async ({page})=>
{

    await page.getByRole('button', {name: 'Fieldwork'}).click();
    await page.getByRole('link', {name: 'Calendar'}).click();

    await expect(page).toHaveTitle('BExIS - Fieldwork Calendar');

});

test(' Click on Fieldwork and open Fieldword Guidelines', async ({page})=>
{

    await page.getByRole('button', {name: 'Fieldwork'}).click();
    await page.getByRole('link', {name: 'Fieldwork Guidelines'}).click();

    await expect(page).toHaveTitle('BExIS - Exploratory Information');

});

test(' Click on Fieldwork and open Forms and Permits', async ({page})=>
{

    await page.getByRole('button', {name: 'Fieldwork'}).click();
    await page.getByRole('link', {name: 'Forms and Permits'}).click();

    await expect(page).toHaveTitle('BExIS - Fieldwork Documents');

});
