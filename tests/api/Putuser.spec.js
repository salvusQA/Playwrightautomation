import { test, expect } from '@playwright/test'
test('update user data', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/5',
        {
            data: {
                id: 5,
                title: 'Playwright Api',
                body: 'learning playwright',
                userId: 2,
            }
        }
    )
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.title).toBe('Playwright Api')
    expect(responseBody.body).toBe('learning playwright')

})