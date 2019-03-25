var express = require("express");
var app = express();

app.set("view engine", "ejs");   
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.get('/calculator', function(req, res){
    res.render('calculator');
});

app.get('/guesser', function(req, res){
    res.render('guesser');
});

app.get('/books', function(req,res){
    res.render('books');
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
})