const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on Tools and open LUI Calculation', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Tools'}).click();
    await page.getByRole('link', {name: 'LUI Calculation'}).click();
    await expect(page).toHaveTitle('BExIS - LUI Calculation');
   
});

test(' Click on Tools and open Plot Profiling Tool',  async ({page})=>
{
    
    await page.getByRole('button', {name: 'Tools'}).click();
    await page.getByRole('link', {name: 'Plot Profiling Tool'}).click();
    await expect(page).toHaveTitle('BExIS - Plot Profiling');
   
});

test(' Click on Tools and open Citation Tool', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Tools'}).click();
    await page.getByRole('link', {name: 'Citation Tool'}).click();
    await expect(page).toHaveTitle('BExIS - Citation Tool');
   
});

test(' Click on Tools and open Climate Data', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Tools'}).click();
    await page.getByRole('link', {name: 'Climate Data'}).click();
    await expect(page).toHaveTitle('BExIS - Climate Data'); 
   
});

test(' Click on Tools and open Photo Gallery', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Tools'}).click();
    await page.getByRole('link', {name: 'Photo Gallery'}).click();
    await expect(page).toHaveTitle('BExIS - Photo Gallery');
   
});

test(' Click on Tools and open Dataset Overview', async ({page})=>
{
    
    await page.getByRole('button', {name: 'Tools'}).click();
    await page.getByRole('link', {name: 'Dataset Overview'}).click();
    await expect(page).toHaveTitle('BExIS - Dataset Overview');
   
});

















   