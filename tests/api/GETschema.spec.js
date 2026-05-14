import { test, expect } from '@playwright/test'
test('schema validation', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2')
    const data = await response.json();

    console.log(data)

    expect(response.status()).toBe(200)

    //check schema validation
    expect(typeof data.id).toBe('number')
    expect(typeof data.name).toBe('string')
    expect (typeof data.email).toBe('string')
    expect(typeof data.address).toBe('object')
    expect(typeof data.company).toBe('object')
})