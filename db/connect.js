const mongoose = require('mongoose')

const connectDB = (url) => {

    return mongoose.connect(url, {
        useNewUrlParser: true,
        // deprecated => 
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    })

}

module.exports = connectDB