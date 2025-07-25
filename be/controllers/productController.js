exports.getProducts = (req, res, next) => {
    res.json({
        sucess: true,
        message: 'Get Products working!'
    })
}

exports.getSingleProduct = (req, res, next) => {
    res.json({
        sucess: true,
        message: 'Get Single Product Working!'
        
    })
}