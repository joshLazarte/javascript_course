var express = require("express");
var app = express();

app.set("view engine", "ejs");   
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/oop", function(req, res){
    res.render('oop');
});

app.get('/async', (req, res) => res.render('async'));

app.get('/async2', (req, res) => res.render('async2'));

app.get('/chuck', (req, res) => res.render('chuck'));

app.get('/cb', (req, res) => res.render('callbacks'));

app.get('/fetch', (req, res) => res.render('fetch'));

app.get('/arrow', (req, res) => res.render('arrow'));

app.get('/await', (req, res) => res.render('await'));

app.get('/try', (req, res) => res.render('try'));

app.get('/regexpressions', (req, res) => res.render('regexpressions'));

app.get('/regexproject', (req, res) => res.render('regexproject'));

app.get('/itgen', (req, res) => res.render('itgen'));

app.get('/itgenproject', (req, res) => res.render('itgenproject'));

app.get('/symbols', (req, res) => res.render('symbols'));

app.get('/destructuring', (req, res) => res.render('destructuring'));

app.get('/maps', (req, res) => res.render('maps'));

app.get('/sets', (req, res) => res.render('sets'));

app.get('/modulepattern', (req, res) => res.render('modulepattern'));

app.get('/singletonpattern', (req, res) => res.render('singletonpattern'));

app.get('/factorypattern', (req, res) => res.render('factorypattern'));

app.get('/observerpattern', (req, res) => res.render('observerpattern'));

app.get('/mediatorpattern', (req, res) => res.render('mediatorpattern'));

app.get('/statepattern', (req, res) => res.render('statepattern'));




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});
