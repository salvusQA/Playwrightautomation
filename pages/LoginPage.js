export class LoginPage {
   constructor(page) {
      this.page = page
      this.Username = page.getByRole('textbox', { name: 'Username' })
      this.Password = page.getByRole('textbox', { name: 'Password' })
      this.loginBtn = page.locator('#login-button')
   }

   async navigate() {
      await this.page.goto('https://www.saucedemo.com/')
   }

   async login(Username, Password) {

      await this.Username.fill(Username)
      await this.Password.fill(Password)
      await this.loginBtn.click()
   }
}