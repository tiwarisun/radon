
const bookModel = require("../models/bookmodels")



let createbook = async function(req,res){
    let data = req.body
    let savedData = await bookModel.create(data)
res.send({msg : savedData})

}


let getBooklist = async function(req,res){
  let savedData = await bookModel.find()
  res.send({msg: allbooks })


}

module.exports.createbook = createbook
module.exports.getBooklist = getBooklist














