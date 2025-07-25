const ProductModel = require('../models/productModel')

exports.getProducts = async (req, res, next) => { //asynced

    const products = await ProductModel.find({}); // awaited

    res.json({
        sucess: true,
        products,
        message: 'Get Products working!'
    })
}

exports.getSingleProduct = (req, res, next) => {
    res.json({
        sucess: true,
        message: 'Get Single Product Working!'
        
    })
}