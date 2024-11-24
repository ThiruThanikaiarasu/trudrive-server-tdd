const express = require('express')
const app = express()

/**
 * Handles GET requests to the root route.
 * 
 * @function Root Route
 * @name GET /
 * @description This route returns a success message confirming the server is working.
 * 
 * @returns {Object} 200 - A JSON object with a message indicating the server is working.
 */
app.get('/', (request, response) => {
    response.status(200).send({ message: "It's working"})
})

module.exports = app