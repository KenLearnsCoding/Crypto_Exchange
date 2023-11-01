import express from "express";

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    let user1 = {
        firstname: "Jane", 
        lastname: "Doe",
        birth: {
            day:22, 
            month: 10, 
            year: 1991
        }
    }
    let user2 = {
        firstname: "Jack", 
        lastname: "Doe",
        birth: {
            day:22, 
            month: 10, 
            year: 1991
        }
    }
    let user3 = {
        firstname: "Jame", 
        lastname: "Doe",
        birth: {
            day:22, 
            month: 10, 
            year: 1991
        }
    }
    let user4 = {
        firstname: "Billy", 
        lastname: "Doe",
        birth: {
            day:22, 
            month: 10, 
            year: 1991
        }
    }

    res.render('home', {users: [user1, user2, user3, user4]})

});

app.get('/about', async (re, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Server started on port`);
});