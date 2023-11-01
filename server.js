import express from "express";

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

});

app.get('/about', async (re, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Server started on port`);
});