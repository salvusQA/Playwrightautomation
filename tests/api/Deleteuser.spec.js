import { test, expect } from '@playwright/test'
test.skip('delete user', async ({ request }) => {
    const ids = [1, 2, 3, 4]
    for (const id of ids) {
        const response = await request.delete(`https://reqres.in/api/users/${id}`)

        console.log(`deleted userid: ${ids}`)
        console.log(`status code: ${response.status()}`)
        expect(response.status()).toBe(401)
    }
})