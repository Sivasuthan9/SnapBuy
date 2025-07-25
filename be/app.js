const express = require('express');
const dotenv = require('dotenv');
const path =  require('path');

const app = express();
const product =  require('./routes/product');
const order = require('./routes/order');
const connectDatabase = require('./config/connectDatabase');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')})


connectDatabase();

app.use(express.json()); // set the data to body of req(req.body), from json data. Middleware Method.
app.use('/api/v1', product);
app.use('/api/v1', order);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}!`)
})

