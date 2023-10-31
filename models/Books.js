const mongoose=require("mongoose");
const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:15,
    },
    author:{
        type:String,
        required:true,
        min:12,
    },
    summary:{
        type:String,
        required:true,
        min:10,
        max:50,
    }
})

module.exports=mongoose.model("Books",BookSchema)