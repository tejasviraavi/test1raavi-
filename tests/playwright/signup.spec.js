import {test,expect} from "@playwright/test"
import { isDate } from "util/types"

test("signup", async function({page}){

   await page.goto("https://freelance-learn-automation.vercel.app/login")

   await page.locator("//a[text()='New user? Signup']").click()

   let signup=await page.locator("//button[text()='Sign up']")

   await expect(signup).not.toBeEnabled()

   await page.getByPlaceholder("Name").pressSequentially("Tejasvi",{delay:100})
   await page.getByPlaceholder("Email").pressSequentially("tejasvi2@gmail.com",{delay:100})
   await page.getByPlaceholder("Password").pressSequentially("Tejasvi",{delay:100})

  page.waitForSelector("//input[@type='checkbox']")

   let allcheckbox = page.locator("//input[@type='checkbox']")

   let countall= await allcheckbox.count()

   console.log("count the checkbox: "+countall)

   for(let i=0;i<countall;i++){

    await allcheckbox.nth(i).click({delay:200})
   }

   await page.locator("//input[@value='Female']").click()



     let allelements= await page.locator("select#state>option")

     let Element = await page.locator("select#state")

     let countall1=await allelements.count()

     for(let index=0;index<countall1;index++){

        let value= await allelements.nth(index).textContent()

        if(value.includes('Uttarakhand')){
            await Element.selectOption(value)

        
        }

     }


   

        

await page.locator("select#hobbies").selectOption("Playing")

await expect(signup).toBeEnabled()

await page.locator("//button[text()='Sign up']").click()


await expect(page).toHaveURL(/login/)

await expect("//div[text()='Signup successfully, Please login!']").toContain("Signup successfully")




   




})