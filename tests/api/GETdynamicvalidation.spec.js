import {test,expect} from '@playwright/test'
test('check dynamic validation', async({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    expect(response.status()).toBe(200)

    //user count should be greater then 0
    expect(data.length).toBeGreaterThan(0)

    //first username should'nt be empty
    expect(data[0].name).toBeTruthy()

    // @ should be in the user email
    expect (data[0].email).toContain('@')
})