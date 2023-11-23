const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set("view engine", "ejs");
// use this line 8 for accessing path of ejs files
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'assets')));
// we have to use this line 10 to give the access to css and assets
app.use(express.static(path.join(__dirname, 'views')));


app.get('/', async (req, res) => {
    const style = "css/home.css";
    res.render('home', { title: 'Home', style: style } );

});

app.get('/purchase', async (re, res) => {
    const style = "css/purchase.css";
    const total_amount_buy = '';
    res.render('purchase', {
        title: 'Purchase', 
        price: 'price', 
        style: style, 
        totalBuy: total_amount_buy
    });

});
app.get('/trade', async (re, res) => {
    res.render('trade', {title: 'Trade'});
});
app.get('/wallet', async (re, res) => {
    res.render('wallet', {title: 'Wallet'});
});
app.get('/market', async (re, res) => {
    res.render('market', {title: 'Market'});
});

app.get('/learn', async (re, res) => {
    res.render('learn', {title: 'Learn'});
});

app.get('/dashboard', async (re, res) => {
    res.render('dashboard', {title: 'Dashboard', price: price});
});

app.listen(port, () => {
    console.log(`Server started on port`);
});