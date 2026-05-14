import{test,expect} from "@playwright/test"
test('path param', async({request})=>{
    const userId = 2
    const response = await request.get('https://reqres.in/api/users/${userId}',
        { headers:{
               'x-api-key': 'reqres_2ea10ed8bc2f47e1a002b05baabcb8d7'
        }
        }
    )
    const responsebody = await response.json()
    console.log(responsebody)
    expect(response.status()).toBe(200)

})