const express = require('express');
const router = express.Router();
 const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/etXINRBooks", BookController.etXINRBooks)
 
router.get("/getBooksYear", BookController.getBooksYear)

router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/bookList", BookController.bookList)

router.get("/getRandumBooks", BookController.getRandumBooks)


module.exports = router;