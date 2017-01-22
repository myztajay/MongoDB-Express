var express = require('express');
var hbs = require("express-handlebars");
var db = require("./db/connection");

var app = express();
app.use('/public', express.static("public")); // anytime the url starts with public lookin 'public' folder

// HBS setup default locations
app.set("view engine", 'hbs');
app.engine(".hbs", hbs({ //extensions .hbs
    extname: ".hbs",
    partialsDir: "views/",
    layoutsDir: "views/",
    defaultLayout: "layout-main"
}));


app.listen(process.env.PORT,process.env.IP, function(){
    console.log("I'm aliiiiive")
})

app.get ("/", function (req,res){
    // res.send("Hello")
    res.render('welcome');
})


app.get ("/poems", function (req,res){
    // res.send("Hello")
    res.render('poems',{ //must be an object
       poems: db.poems
    });
})


app.get ("/:name", function (req,res){
    console.log(req.params)
    res.send(`Hello ${req.params.name}` )
})