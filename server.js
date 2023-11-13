const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'views')));

app.get('/', async (req, res) => {
    const style = "./views/css/style.css";
    
    res.render('home', { title: 'Home', style: style } );
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