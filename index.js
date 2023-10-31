const express=require('express')
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv').config()
const bodyParser = require('body-parser');
const BookController=require("./controllers/BookController")

//Mongoose server Connection
mongoose.connect(process.env.MONGO_URL)
console.log("MongoDB Connected");

//define Routes
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/books',BookController)


//Running on port
app.listen(process.env.PORT,()=>{
    console.log("server has been connected");
})