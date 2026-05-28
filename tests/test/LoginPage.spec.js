import {LoginPage} from "../page/LoginPage.js"
import{test,expect} from "@playwright/test"


test("Login to application", async ({page})=>{

await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginpage =new LoginPage(page)


loginpage.loginToApplication("admin@email.com","admin@123")





})
