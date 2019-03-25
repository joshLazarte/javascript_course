const express = require('express'),
      app     = express();
      
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/easy', (req, res) => res.render('easy'));

app.get('/easy2', (req, res) => res.render('easy2'));

app.get('/easy3', (req, res) => res.render('easy3'));

app.get('/gitsearch', (req, res) => res.render('gitsearch'));

app.get('/weather', (req, res) => res.render('weather'));

app.get('/tracalorie', (req, res) => res.render('tracalorie'));

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server has started');
});