const express = require('express');
const router = express.Router();


const middleware = require("../middleware/auth")

const bookController = require("../controllers/bookController")
const userController = require("../controllers/userController")
const reviewController = require("../controllers/reviewController")





router.post("/register", userController.createUser)
router.post("/login", userController.loginUser)

router.post("/books", middleware.authenticate, bookController.createBook)
router.get("/books", middleware.authenticate, bookController.getBooks)
router.get("/books/:bookId", middleware.authenticate, bookController.getBookDetailsById)

router.put("/books/:bookId", middleware.authenticate,middleware.authorization, bookController.updateBookById)

router.delete("/books/:bookId",middleware.authenticate,middleware.authorization, bookController.deleteBookById)

router.post("/books/:bookId/review",reviewController.craeteReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)


module.exports = router;