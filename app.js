require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/database/connection');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app = express();

// Database connection
connectDB();

// Set view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Load assets
app.use(express.static('./assets'))

// Load routers
app.use('/', require('./src/routes/mainRouter'))

app.listen(PORT, () => { console.log(`Listening on http://${HOST}:${PORT}`) })