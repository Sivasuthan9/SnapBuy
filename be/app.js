const express = require('express');
const dotenv = require('dotenv');
const path =  require('path');
const cors = require('cors');

const app = express();
const product =  require('./routes/product');
const order = require('./routes/order');
const connectDatabase = require('./config/connectDatabase');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')})


connectDatabase();

//'Access-Control-Allow-Origin' header for frontend.
//TODO: Properply handle this.(Urgent)
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json()); // set the data to body of req(req.body), from json data. Middleware Method.
app.use('/api/v1', product);
app.use('/api/v1', order);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}!`)
})

