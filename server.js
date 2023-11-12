import express from "express";

const port = 3000;

const path = require('path');

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', async (req, res) => {
    res.render('home.ejs', {});
});

// app.get('/purchase', async (re, res) => {
//     res.render('purchase', {});
// });
// app.get('/trade', async (re, res) => {
//     res.render('trade', {});
// });
// app.get('/wallet', async (re, res) => {
//     res.render('wallet', {});
// });
// app.get('/market', async (re, res) => {
//     res.render('market', {});
// });
// app.get('/learn', async (re, res) => {
//     res.render('learn', {});
// });
// app.get('/dashboard', async (re, res) => {
//     res.render('dashboard', {});
// });

app.listen(port, () => {
    console.log(`Server started on port`);
});