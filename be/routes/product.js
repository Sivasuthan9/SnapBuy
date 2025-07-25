const express = require('express');
const router = express.Router();
const {getProducts} = require('../controllers/productController');
const { getSingleProduct } = require('../controllers/productController');

router.route('/product').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

module.exports = router;