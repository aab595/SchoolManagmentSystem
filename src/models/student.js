const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema(
    {
        firstname :{
          type:String,
          required:true,
          maxLength:20,
        },
        name :{
            type:String,
            required:true,
            maxLength:20,
          },
        
        
        Adress: {
            type: String,
            
        },
        Sexe: { 
            type: String,
            required:true
         },
         Classe: { 
            type: String,
            maxLength:10,
            required:true
         },
    }
);


module.exports = mongoose.model('Student', studentSchema);