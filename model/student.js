const mongoose = require("mongoose");

const Student = new mongoose.Schema(
    {
        pname : {

            type: String
   
            //unique : true
   
        },
   
        pdesc :{
   
            type : String
   
        },
   
        pprice :{
   
           type : Number
   
        },
   
        pquantity : {
   
           type : Number
   
        },
   
        psku : {
   
           type : String
   
        },
   
        pimage:
   
        {
   
            type : String
   
        },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);

module.exports = mongoose.model("Student",Student);
