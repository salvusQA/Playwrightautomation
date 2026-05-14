import { test, expect } from '../fixtures/baseFixtures'
import users from '../test-data/logindata.json'

for (const data of users) {
    test(`Login test - ${data.username}`, async ({ loginPage, cartPage }) => {

        await loginPage.navigate()

        await loginPage.login(data.username, data.password)

        await cartPage.cart()

        await cartPage.Opencart()

        await expect(cartPage.page.getByText(/Your Cart/)).toBeVisible()

        await cartPage.RemoveProduct()

        await cartPage.ContinueShopping()

    })

}