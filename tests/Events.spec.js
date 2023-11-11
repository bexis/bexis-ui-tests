const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on Events and Event Registration', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Events'}).click();
    await page.getByRole('link', {name: 'Event Registration'}).click();
    await expect(page).toHaveTitle('BExIS - Event Registrations');
   
});