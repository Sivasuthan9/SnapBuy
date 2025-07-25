const productModel = require('../models/productModel');
const orderModel = require('../models/orderModel');

exports.createOrder = async (req, res, next) => {
    const cartItems = req.body;
    const ammount = Number(cartItems.reduce((acc, item) => (acc+ item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartItems, ammount, status});

    cartItems.forEach(async (item) => {
        const product = await productModel.findById(item.product._id?.$oid || item.product._id); // How ._id works?
        product.stock = product.stock - item.qty; // stock ammount is handeled.
        // console.log(product.stock, item.qty);
        await product.save();
    });

    res.json({
        success: true,
        order
    })

}