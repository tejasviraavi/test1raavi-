import {test,expect} from "@playwright/test"

test.skip("alert", async ({page})=>{


await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on("dialog",(dia)=>{

dia.accept()

 expect(dia.message()).toBe("I am a JS Alert")

})  


await page.getByText("Click for JS Alert").click()

})


test("confirm",async ({page})=>{

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


page.on("dialog",(dia)=>{

dia.accept()

})
await page.getByText("I am a JS Confirm").click()


} )