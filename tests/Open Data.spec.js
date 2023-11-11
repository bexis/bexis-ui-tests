const {test, expect} = require('@playwright/test');


test.beforeEach(async ({page}) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on Open Data and open Public Climate Data', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Open Data'}).click();
    await page.getByRole('link', {name: 'Public Climate Data'}).click();
    await expect(page).toHaveTitle('BExIS - Public Climate Data About');
   
});

test(' Click on Open Data and open Public Data Search', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Open Data'}).click();
    await page.getByRole('link', {name: 'Public Data Search'}).click();
    await expect(page).toHaveTitle('BExIS - Search in Public Datasets');
   
});




