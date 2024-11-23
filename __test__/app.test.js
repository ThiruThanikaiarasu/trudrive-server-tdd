const request = require('supertest')
const app = require('../app')

describe('Root Route', () => {
    describe('GET /', () => {

        let response

        beforeAll(async () => {
            response = await request(app).get('/')
        })
        it('should respond with 200 status', async () => {

            expect(response.status).toBe(200)
        })

        it('should respond with json data and contain property message', async () => {

            expect(response.headers['content-type']).toContain('application/json')
            expect(response.body).toHaveProperty('message')
        })
    })
    
})
