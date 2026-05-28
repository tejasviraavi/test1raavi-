import {test, expect} from '@playwright/test'

test("tab",async ({browser})=>{

let   context = await browser.newContext()

let page = await context.newPage()

await page.goto("https://freelance-learn-automation.vercel.app/login")

let [facebooklogin]=await Promise.all([

context.waitForEvent("page"),

await page.locator("//div[@class='social']//following-sibling::a[contains(@href,'facebook')]").click()
])

let [sigin]=await Promise.all([
context.waitForEvent("page"),
await facebooklogin.getByText("Create new account").click()

])

await sigin.locator("//input[@name='firstname']").pressSequentially("Tejasvi",{delay:1000})


let [ForgottenPasswordPage]=await Promise.all([

context.waitForEvent("page"),
await facebooklogin.locator("//span[text()='Forgotten password?']").click()

])


await ForgottenPasswordPage.getByPlaceholder("Email address or mobile number").pressSequentially("tejasvi@gmail.com",{delay:1000})

await ForgottenPasswordPage.locator("//button[@type='submit']").click()


})