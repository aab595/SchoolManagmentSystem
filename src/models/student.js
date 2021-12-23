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
        
        
        adress: {
            type: String,
            
        },
        sexe: { 
            type: String,
            required:true
         },
         classe: { 
            type: String,
            maxLength:10,
            required:true
         },
    }
);


module.exports = mongoose.model('Student', studentSchema);