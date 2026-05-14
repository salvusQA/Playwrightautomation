export class Addtocart{

    constructor (page){
        this.page = page
        this.Cartbutton =page.locator('#add-to-cart-sauce-labs-backpack')
        this.Carticon = page.locator('[data-test="shopping-cart-link"]')
        this.remove = page.getByRole('button', {name: 'Remove'})
        this.continueBtn = page.getByRole('button', { name: 'Continue Shopping' })

        //sorting locatorts (New)

        this.sortdropdown = page.getByRole('combobox')
        this.productNames = page.locator('.inventory_item_name')
        this.addtocart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
    }
     async cart(){

        await this.Cartbutton.click()
     }

     async Opencart(){

        await this.Carticon.click()
       
     }

     async RemoveProduct(){
      await this.remove.click()
     }

     async ContinueShopping(){

      await this.continueBtn.click()

     }

     async sortBy (options){
      await this.sortdropdown.selectOption(options)
     }

}