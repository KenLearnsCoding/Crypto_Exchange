import express from "express";

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

});

app.get('/purchase', async (re, res) => {
    res.render('about', {});
});
app.get('/trade', async (re, res) => {
    res.render('about', {});
});
app.get('/wallet', async (re, res) => {
    res.render('about', {});
});
app.get('/market', async (re, res) => {
    res.render('about', {});
});
app.get('/learn', async (re, res) => {
    res.render('about', {});
});
app.get('/dashboard', async (re, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Server started on port`);
});