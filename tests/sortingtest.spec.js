import {test, expect} from '../fixtures/baseFixtures'

test('sorting z to a', async ({ loginPage, cartPage }) => {

  await loginPage.navigate()
  await loginPage.login('standard_user', 'secret_sauce')

  // 🔥 sorting apply
  await cartPage.sortBy('za')

  // 🔥 IMPORTANT WAIT
  await cartPage.page.waitForTimeout(2000)

  // 🔥 UI data
  const items = await cartPage.productNames.allTextContents()
  console.log('UI ITEMS:', items)

  // 🔥 expected
  const sorted = [...items].sort().reverse()
  console.log('EXPECTED:', sorted)

  expect(items).toEqual(sorted)

})