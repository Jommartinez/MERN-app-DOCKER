const express = require('express')
const cors = require('cors')

const db = require('./db')
const productRouter = require('./routes/product-router')

const app = express()
const apiPort = 5000

app.use(express.urlencoded( { extended: true } ));
app.use(cors())
app.use(express.json());

db.on('error', console.error.bind(console, 'MongDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello Word!')
})

app.use('/api', productRouter)

app.listen(apiPort, () => console.log(`Server is running on port ${apiPort}`))