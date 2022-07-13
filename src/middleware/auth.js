const jwt = require('jsonwebtoken')

const bookModel = require('../models/bookModel')
//const reviewModel = require('../models/reviewModel');
const userModel  = require('../models/userModel');


const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]

        if (token.length != 153) {
            return res.status(400).send({ status: false, msg: "invalid token" })
        }
        if (!token) {
            return res.status(400).send({ status: false, msg: "token not present" })
        }
        let decodedToken = jwt.verify(token, "functionUp-project-3")
        if (!decodedToken) {
            return res.status(401).send({ status: false, msg: "Authentication failed" })
        }
        else {
            req.decodedToken = decodedToken

        }
        next();
    }

    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



/*

const authorization = async (req, res, next) => {
    try {
        let token = req.headers["x-api-key"]
       // if (!token) token = req.headers["x-api-key"]
        if (!token) {
            return res.status(400).send({ status: false, msg: "😕Token is missing Please enter token to Procced" })
        }
        let bookId = req.params.bookId;
        let decodedToken = jwt.verify(token, "functionUp-project-3")
        if (!decodedToken) {
            return res.status(400).send({ status: false, msg: "❌Token is invalid Please Provide valid token to Procced❌" })
        }
        decodedUserId = decodedToken.userId

        let book = await bookModel.findOne({_id: bookId} )
        if (!book) return res.status(404).send({
            status: false,
            msg: "❌  The 📖BOOK You entered does not exist in database  ❌"
        })

        user = book.userId.toString()

        if (user != decodedUserId) {
            return res.status(400).send({
                status: false,
                mesg: " 👨‍🔧 Opps❗  You are not Athorised for this action  SORRY ❗❗ "
            })
        }
        next();

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, msg: error.message })
    }
};

*/





const authorization = async function(req , res , next){
    try{
        
        let decodedToken = req.decodedToken
        let bookId = req.params.bookId
        let book = await bookModel.findById(bookId)
        if(!book) return res.status(400).send({status : false , msg: "book is not present"})
        
        if(book.userId != decodedToken.userId) {  
        return res.status(403).send({status: false , msg:"Unauthorized user"})}
        else{
            req.book = book
            next()
        }
    }
    catch(err){
        res.status(500).send({status:false , msg: err.message})
    }
}








module.exports = { authenticate, authorization }