require('dotenv').config()
const mongoose = require('mongoose')
const connectToDatabase = require('../database/connection')

describe('Database Connection', () => {
    afterAll(async () => {
        await mongoose.connection.close()
    }) 

    it('should connect to MongoDB successfully', async () => {

        await connectToDatabase()
        expect(mongoose.connection.readyState).toBe(1)
    }, 10000)


})
