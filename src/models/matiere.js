const mongoose = require('mongoose')


const matiereSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 50
        },
        
    }
);


module.exports = mongoose.model('Matiere', matiereSchema);