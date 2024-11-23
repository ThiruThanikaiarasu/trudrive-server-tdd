require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.status(200).send({ message: "It's working"})
})

app.listen(process.env.PORT, console.log(`Server is running at http://localhost:${process.env.PORT}`))