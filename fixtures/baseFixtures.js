import {test as base, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Addtocart } from '../pages/Inventorypage'


export const test = base.extend({
    loginPage : async({page}, use)=>{
        const login = new LoginPage(page)
        await use (new LoginPage (page))

    },

    cartPage: async ({page}, use)=>{
    const CartPage = new Addtocart(page)
    await use (new Addtocart(page))
    }
})

export { expect } from '@playwright/test'