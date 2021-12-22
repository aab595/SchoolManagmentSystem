const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 20
        },
        description: { type: String },
        content: {
            type: String,
            required: true
        }
    }
);


module.exports = mongoose.model('Course', courseSchema);