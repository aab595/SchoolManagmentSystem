const mongoose = require('mongoose')


const professorSchema = new mongoose.Schema(
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
        
        Speciality: { 
            type: String,
            required:true
         },
        Adress: {
            type: String,
            
        }
    }
);


module.exports = mongoose.model('Professor', professorSchema);