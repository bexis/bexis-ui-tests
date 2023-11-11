const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on Upload and open Create Dataset', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Upload'}).click();
    await page.getByRole('link', {name: 'Create Dataset'}).click();
    await expect(page).toHaveTitle('BExIS - Create Dataset');
   
});

test(' Click on Upload and open Create Publication', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Upload'}).click();
    await page.getByRole('link', {name: 'Create Publication'}).click();
    await expect(page).toHaveTitle('BExIS - Create Publication');
   
});

test(' Click on Upload and open Update Data', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Upload'}).click();
    await page.getByRole('link', {name: 'Update Data'}).click();
    await expect(page).toHaveTitle('BExIS - Upload Data');
   
});

test(' Click on Upload and open Push Big File', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Upload'}).click();
    await page.getByRole('link', {name: 'Push Big File'}).click();
    await expect(page).toHaveTitle('BExIS - Push Big File');
   
});

