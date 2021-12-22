require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';
const mongoUrl = process.env.MONGO_URL;


app = express();


app.set('views', './views');
app.set('view engine', 'ejs');


try {
    mongoose.connect(mongoUrl, () => {
        console.log('Successfully connected to the database')
    })
} catch (error) {
    console.log("Unable to connect to the database", error);
}


app.use('/', require('./routes/homeRoute'))




app.listen(PORT, () => {
    console.log(`Listening on ${HOST}:${PORT}`)
})