import {test,expect} from "@playwright/test"


test("login", async function({page}){

   await page.goto("https://freelance-learn-automation.vercel.app/login")

   await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com",{delay:100})

   await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:100})

   await page.locator("//button[@type='submit']").click()

   expect(await page.title()).toContain("Learn Automation Courses")

   await page.locator("//span[text()='Manage']").click()

await page.getByAltText("manage course").click()

await page.locator("//button[text()='Add New Course ']").click()

await page.setInputFiles("#thumbnail","node_modules/testdata/sample.png")

let coursename= "Tejasvireddy"+Date.now()

await page.locator("#name").fill(coursename)
await page.locator("#description").fill("Tejasvi")
await page.locator("#instructorNameId").fill("12345")
await page.locator("#price").fill("1500")


await page.locator("//input[@name='startDate']").click()


let alldates=await page.locator("//div[@aria-label='month  2025-11']//following::div[contains(@aria-label,'November')]")
 
let sdinner =await alldates.allInnerTexts()

console.log(sdinner)

let sdcount =await sdinner.length

console.log(`count:${sdcount}`)
for(let sd=0;sd<=sdcount;sd++){

   if(sdinner[sd]==15){
      alldates.nth(sd).click()
   }



  
}

await page.pause()


await page.pause()


await page.locator("(//div[text()='27'])[2]").click()

await page.locator("//input[@name='endDate']").click()

await page.getByLabel("Choose Tuesday, December 23rd, 2025").click()

let checkbox= page.locator("//input[@id='isPermanent']")





})


