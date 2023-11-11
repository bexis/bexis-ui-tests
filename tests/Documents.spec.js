const {test, expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });


test(' Click on Documents and open General', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Documents'}).click();
    await page.getByRole('link', {name: 'General'}).click();
    await expect(page).toHaveTitle('BExIS - General Documents');
   
});

test(' Click on Documents and open PhD', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Documents'}).click();
    await page.getByRole('link', {name: 'PhD'}).click();
    await expect(page).toHaveTitle('BExIS - PhD Documents');
   
});

test(' Click on Documents and open Postdoc', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Documents'}).click();
    await page.getByRole('link', {name: 'Postdoc'}).click();
    await expect(page).toHaveTitle('BExIS - PostDoc Documents');
   
});



