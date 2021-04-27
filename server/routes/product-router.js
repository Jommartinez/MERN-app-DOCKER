const express = require('express')
const ProductController = require ('../controllers/product-controller')

const router = express.Router()

router.post('/product', ProductController.createProduct)
router.get('/products', ProductController.getProducts)

module.exports = router