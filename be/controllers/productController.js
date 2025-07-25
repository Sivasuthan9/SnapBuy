const ProductModel = require('../models/productModel')

exports.getProducts = async (req, res, next) => { //asynced

    // Filter the product using regulare expression($regex, $options(case senstivity handling))
    const query = req.query.keyword?{name :{
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}

    const products = await ProductModel.find(query); // awaited

    res.json({
        success: true,
        products,
    })
}

exports.getSingleProduct = async (req, res, next) => {

        try {
        const product = await ProductModel.findById(req.params.id);

        res.json({
            success: true,
            product
            
        })}
        catch(error){
            res.status(404).json({  // Optional to add status 404 here.
            success: false,
            message: 'Unable to find the product: '+error.message 
        })}
}