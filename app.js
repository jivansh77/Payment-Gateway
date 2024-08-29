require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/donation',paymentRoute);

http.listen(9000, function(){
    console.log('Server is running');
});