const OrderModel = require('../models/orderModel');

exports.createOrder = (req, res, next) => {
    console.log(req.body+' DATAAAAAAAAA');
    const cartItems = req.body;
    const ammount = cartItems.reduce((acc, item) => (acc+ item.product.price * item.qyt), 0);
    console.log('Ammountttt----:' + ammount);
    res.json({
        success: true,
        message: 'Order Works!'
    })

}