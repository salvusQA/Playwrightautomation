import { test, expect } from '@playwright/test'
test('single params', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users', {

        params: {
            id: 2,
            username: 'Antonette'
        }
    })
    const data = await response.json()
    console.log(data)
    expect(response.status()).toBe(200)
    expect(data.length).toBeGreaterThan(0)
    expect(data[0].id).toBe(2);

    expect(data[0].username).toBe('Antonette');
})

//using for loop for checking multiple ids

test('multiple id params', async ({ request }) => {
    const UserIds = [1, 2, 3, 4,]
    for (const id of UserIds) {
        const response = await request.get('https://jsonplaceholder.typicode.com/users',
            {
                params: {
                    id: id
                }

            })

            const data = await response.json()
            console.log(`User ${id}:` , data)
            expect(response.status()).toBe(200)
            expect(data.length).toBeGreaterThan(0)
            expect(data[0].id).toBe(id);
    }

})