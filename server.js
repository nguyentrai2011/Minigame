var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/scripts", express.static(__dirname+"/node_modules/web3.js-browser/build/"));
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

//Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minigame:5jIWrS4l0qIi6Zfx@cluster0.2yuf5.mongodb.net/minigame?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if (err){
        console.log("Mongo connected error! " +err);
    }
    else {
        console.log("Mongo conected success!!!");
    }
});

//minigame 5jIWrS4l0qIi6Zfx
require("./controllers/game")(app);