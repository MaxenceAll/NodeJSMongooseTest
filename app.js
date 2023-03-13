require('dotenv').config();
require('express-async-errors')
//Async error

const express = require('express')
const app = express();

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// expressjson
app.use(express.json());


// routes
app.get('/', (req ,res) => {
    res.send("<h1>Store API</h1> <a href='/api/v1/products'> products route</a> ")
})

// le ROUTER :
app.use('/api/v1/products', productsRouter)

//products routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);
const port = process.env.PORT || 5000

const start = async ()=>{
    try {
        //Connect à la db
        await connectDB (process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start() 