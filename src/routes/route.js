const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel = require("../models/bookmodels")
const bookController = require("../controllers/bookcontrollers")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", bookController.createbook  )

router.get("/getBooklist", bookController.getBooklist)

router.post("/createuser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)


module.exports = router;