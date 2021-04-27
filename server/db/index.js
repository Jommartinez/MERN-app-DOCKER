const mongoose = require('mongoose')

mongoose
    .connect('mongodb://mongo:27017/store', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`connected to Mongo! Database name ${x.connections[0].name}`))
    .catch(e => {
        console.log('Connection error to mongo', e.message)
    })

const db = mongoose.connection

module.exports = db
