require('dotenv').config()

const app = require('./app')
const connectToDatabase = require('./database/connection')

connectToDatabase()
    .then(() => {
        try{
            app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))
        }
        catch(error) {
            console.log(`Can't connect to DB : ${error}`)
        }
    })
    .catch((error) => {
        console.log(`Error while connecting to database : ${error}`)
    })
