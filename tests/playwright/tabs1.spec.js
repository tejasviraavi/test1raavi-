import {test, expect} from '@playwright/test'

test("tab",async ({browser})=>{

let   context = await browser.newContext()

let page = await context.newPage()

await page.goto("https://freelance-learn-automation.vercel.app/login")



let promisepage=context.waitForEvent("page")



await page.locator("//div[@class='social']//following-sibling::a[contains(@href,'facebook')]").click()

let facebooklogin= await promisepage

await facebooklogin.getByText("Create new account").click()

})