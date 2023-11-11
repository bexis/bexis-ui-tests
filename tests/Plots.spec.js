const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bexis.uni-jena.de/Account/Login');
  });

test(' Click on Plots and open Plot Charts', async ({page})=>
{


    await page.getByRole('button', {name: 'Plots'}).click();
    await page.getByRole('link', {name: 'Plot Charts'}).click();
    await expect(page).toHaveTitle('BExIS - Plot Charts');
   
});

test(' Click on Plots and open Plot Charts Packages', async ({page})=>
{
    
    await Promise.all([

        await page.getByRole('button', {name: 'Plots'}).click()
    ])
    await page.getByRole('link', {name: 'Plot Chart Packages'}).click();
    await expect(page).toHaveTitle('BExIS - Potchart Documents'); //Spelling mistake Potchart should be Plotchart
   
});

test(' Click on Plots and open Driving Directions', async ({page})=>
{
    
    await Promise.all([

        await page.getByRole('button', {name: 'Plots'}).click()
    ])
    await page.getByRole('link', {name: 'Driving Directions'}).click();
    await expect(page).toHaveTitle('BExIS - Driving Directions Documents');
   
});



