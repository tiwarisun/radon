// create a bookschema with bookname, authorname, category and year
// creat same 2 api's for books i.e 
// 1 api to create a new book and another api to get the list of all books.




const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({

 BookName: {  
 type : String ,
 required : true ,
unique : true
 },

 AuthorName : {

    type : String ,
    required : true 

 },

 Category : {

    type : String ,
    required : true ,
  

 },

    year : {

        type : Number
    },

   }, { timestamps : true }

   );
 
module.exports = mongoose.model('Book' , bookSchema);




























