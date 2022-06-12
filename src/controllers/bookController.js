


const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishermodel = require("../models/publishermodel")


const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})

}


const getBooksData= async function (req, res) {
    let book = req.body
if(!book.autherId){
    res.send({msg: " author not present, detail is required "})
    }
    else if (book != book.publisherId){
        res.send({ msg: " publisher not present, details required " })
    }
    else {
        let getBooksData = await bookModel.create(book)
    res.send({data: getBooksData})
    }
 
}

const getAlldetails  = async function(req, res) {
    let alldetails = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data : alldetails})
}





/*

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})
}

const getBooksWithPublisherDetails = async function (req, res) {
    let specificPublisher = await bookModel.find().populate('author_id')
    res.send({data: specificPublisher})
}

*/








module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getAlldetails= getAlldetails
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
//module.exports.getBooksWithPublisherDetails = getBooksWithPublisherDetails


