import { test, expect } from '@playwright/test'

test('post user validation', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: "Bug in Login Feature",
            body: "User is unable to login with valid credentials on Chrome browser",
            userId: 2
        }
    });
    const data = await response.json();
    console.log(data)
    expect(response.status()).toBe(201)
    console.log('status code:', response.status());
    expect(data.title).toBe('Bug in Login Feature')
    expect(data.body).toBe('User is unable to login with valid credentials on Chrome browser')
    expect(data.userId).toBe(2);
})


test('Invaild data', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: "12321213213",
            body: "true",
            userId: 2
        }
    });
    const data = await response.json()
    console.log(data)
    expect(response.status()).toBe(400)

})

test('without data', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {

        }
    });
    const data = await response.json()
    console.log(data)
    expect(response.status()).toBe(400)

});
