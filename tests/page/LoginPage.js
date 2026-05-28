import { TIMEOUT } from "dns"

class LoginPage{

constructor(page){

this.page =page
 this.email=page.locator("#email1")
  this.password=page.locator("#password1")
   this.signin= page.locator("//button[text()='Sign in']")
}

async loginToApplication(username,password){

    await this.email.fill(username)
    await this.password.fill(password)
    await this.signin.click({TIMEOUT:5000})
}
async duplicateloginToApplication(username,password){

    await this.email.fill(username)
    await this.password.fill(password)
    await this.signin.click({TIMEOUT:5000})
}



}

export{LoginPage}