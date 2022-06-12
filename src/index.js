const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const currentdateMW = function (req, res , next) {

let currentdate = new Date();
let datetime = currentdate.getDate() + " "
                +(currentdate.getMonth()+1) + " " 
                +currentdate.getFullYear() + " "
                +currentdate.getUTCHours() + ":"
                +currentdate.getUTCMinutes() + " :"
                +currentdate.getSeconds();
                
       let ip = req.ip
       let url = req.originalUrl         

console.log(`${datetime} ${ip} ${url}`)
next ()
}

app.use (currentdateMW)



mongoose.connect("mongodb+srv://hiFunctionup:dpD2Y2FP5bnyaJD3@cluster0.zclrt.mongodb.net/Populate-and-Reference?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
