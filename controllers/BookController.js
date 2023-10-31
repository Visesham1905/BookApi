const Books=require("../models/Books.js")
const BookController=require('express').Router()



//add new book
BookController.post("/add",async(req,res)=>{
    try{
        const newBook=await Books.create({...req.body})
        return res.status(201).json(newBook)    
    }catch(error){
        console.log(error);
    }
})


//view all book
BookController.get("/",async(req,res)=>{
    try{
        const books=await Books.find(req.query)
        return res.status(200).json(books)
    }catch(error){
        console.log(error)
    }
})


//view details of a specific book by id
BookController.get('/:id', async (req, res) => {
    try {
      const bookId = req.params.id;
      const book = await Books.findById(bookId);
    
      return res.status(200).json(book);
    
    } catch (error) {
      console.error(error);
    }
  });

//update book
BookController.put("/:id",async(req,res)=>{
    try{
    const UpdateBook=await(Books.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
        ));
        if (!UpdateBook) {
            return res.status(404).json({ msg: "Book not exist? plz add the book " });
          }
      
      res.status(200).json(UpdateBook)
    }catch(error){
        console.log(error)
    }
})


//delete book
BookController.delete("/:id",async(req,res)=>{
    try {
        const deleteBook=await(Books.findByIdAndDelete(req.params.id))
        if (!deleteBook) {
            return res.status(404).json({ msg: "Book not exist? plz add the book " });
          }
        res.status(200).json("User has been Deleted Successfully");

    } catch (error) {
        console.log(error)
    }
})

module.exports=BookController
