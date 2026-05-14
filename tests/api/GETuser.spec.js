import { test, expect } from '@playwright/test'
test('users data', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/2')
  const data = await response.json();
  console.log(data)
  expect(response.status()).toBe(200)

})
test('get user validation', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/2')
  const data = await response.json;
  console.log(data)
  expect(response.status()).toBe(200)
  console.log(response.headers());
  //Validation of headers
  expect(response.headers()['content-type']).toContain('application/json');
})

//Neg testing for user
test('Invalid user', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/999')
  const data = await response.json()
  console.log(data)
  //status check it should be 404
  expect(response.status()).toBe(404)
})

// Nested data testing 
test('nested json', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/2')
  const data = await response.json()
  console.log(data)
  expect(response.status()).toBe(200)
  expect(data.address.city).toBe('Wisokyburgh')
  expect(data.company.name).toBe('Deckow-Crist')
})

test('check total items', async ({ request }) => {
  const response = await request.get('https://www.salvusestore.com/bracelet')
  const data = await response.json()
  console.log(data)
  expect(response.status()).toBe(200)
 
})