const mongoose = require('mongoose')

/**
 * @module database
 */

/**
 * Connects to the MongoDB database using Mongoose.
 *
 * This function asynchronously connects to the database using the URL
 * provided in the environment variable `DB_URL`. Upon successful connection,
 * a success message is logged to the console.
 *
 * @async
 * @function connectToDatabase
 * @returns {Promise<Connection>} A promise that resolves to the Mongoose connection object once the connection is established.
 * @throws {Error} If the connection fails, an error is thrown.
 */
const connectToDatabase = async () => {
    const db = await mongoose.connect(process.env.DB_URL)

    console.log(`Connected successfully to database`)

    return db.connection
}

module.exports = connectToDatabase