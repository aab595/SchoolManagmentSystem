const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, () => {
            console.log('Successfully connected to the database');
        })
    } catch (error) {
        console.log("Unable to connect to the database", error);
    }
}


module.exports = connectDB