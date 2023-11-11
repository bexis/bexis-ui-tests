const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on My Data', async ({page})=>
{
    
    await page.getByRole('link', { name: 'My Data' }).click();
    await expect(page).toHaveTitle('BExIS - My Data');
});