const mongoose = require('mongoose')


const classeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 20
        },
        
        matieres: {
            type: [mongoose.Types.ObjectId]
        
        }
    }
);


module.exports = mongoose.model('Classe', classeSchema);