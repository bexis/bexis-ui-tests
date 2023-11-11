const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on Search', async ({page})=>
{
    
    await page.getByRole('link', {name: 'Search'}).click();
    await expect(page).toHaveTitle('BExIS - Search');
});