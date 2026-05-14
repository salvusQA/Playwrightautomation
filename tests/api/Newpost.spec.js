import { test, expect } from '@playwright/test'
test('create post user', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'playwright is working fine',
                body: 'yes its working good',
                userId: 3

            }
        }
    )

    const data = await response.json();
    console.log(data)
    expect(response.status()).toBe(201)
    expect(data.title).toBe('playwright is working fine')
});

//test multiple data 

test('mutiple test', async ({ request }) => {
    const post = [
        { title: 'post1', body: 'body A', userid: '2' },
        { title: 'post2', body: 'body B', userid: '3' },
        { title: 'post3', body: 'body c', userid: '4' },
        { title: 'post4', body: 'body D', userid: '4' }
    ]
    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
        { data: post }
    );
    const data = await response.json()
    console.log(data)
    expect(response.status()).toBe(201)
    expect(data.title).toBe(post.title);
})

//Negitive testing

test('post neg testing', async ({ request }) => {
    //missing title response code should be 400
    const payloads = [
        //Body missing
        { title: 'post 1', body: '', userid: '1' },
        //Title missing
        { title: '', body: 'body A', userid: '1' },
        //Empty field
        { title: '', body: '', userid: '1' },
        //Missing user id
        { title: '', body: '', }
    ];

    for (const payload of payloads) {
        console.log('sending:', payload)

        const response = await request.post('https://jsonplaceholder.typicode.com/posts',
            {
                data: payload
            });

        const data = await response.json()
        console.log('response', data)
        expect(response.status()).toBe(201);
    }
})