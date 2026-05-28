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

await page.locator("#name").fill("Tejasvireddy")
await page.locator("#description").fill("Tejasvi")
await page.locator("#instructorNameId").fill("12345")
await page.locator("#price").fill("1500")

await page.locator("//input[@name='startDate']").click()

await page.locator("(//div[text()='27'])[2]").click()

await page.locator("//input[@name='endDate']").click()

await page.getByLabel("Choose Tuesday, December 23rd, 2025").click()

let checkbox= page.locator("//input[@id='isPermanent']")

await checkbox.click()

await expect(checkbox).toBeChecked()

await page.getByAltText("select category").click()

let dropdown=page.locator("//div[@class='menu-items']")


let options = await dropdown.locator("button")

let countall=await options.count()

for(let index=0;index<countall;index++){

   let text= await options.nth(index)

   if(text=='Selenium'){

      await options.nth(index).click()

   }
}
await page.getByText("Save").click()


await page.waitForTimeout(10000)

})


