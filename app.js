var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', function(req, res) {
    res.render('pages/index');
});

var port = 8080;
app.get('/registered', function(req, res) {
    res.render('pages/registered');
});

app.get('/groceries', function(req, res) {
    res.render('pages/groceries');
});

app.get('/adminHome', function(req, res) {
    res.render('pages/adminHome');
});

app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/gourmet', function(req, res) {
    res.render('pages/gourmet');
});

app.get('/household', function(req, res) {
    res.render('pages/household');
});

app.get('/offers', function(req, res) {
    res.render('pages/offers');
});

app.get('/offers', function(req, res) {
    res.render('pages/offers');
});

app.get('/packagedfoods', function(req, res) {
    res.render('pages/packagedfoods');
});

app.get('/personalcare', function(req, res) {
    res.render('pages/personalcare');
});

app.get('/products', function(req, res) {
    res.render('pages/products');
});
app.get('/short-codes', function(req, res) {
    res.render('pages/short-codes');
});


app.get('/single', function(req, res) {
    res.render('pages/single');
});

app.get('/faq', function(req, res) {
    res.render('pages/faq');
});

app.get('/checkout', function(req, res) {
    res.render('pages/checkout');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('/beverages', function(req, res) {
    res.render('pages/beverages');
});

app.listen(port);
console.log('\nApplication ruing on port'+port);