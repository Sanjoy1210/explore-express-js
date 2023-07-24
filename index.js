const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// app.all() method
// universal route for all http methods like get, post, put, delete and so on
// app.all('/', (req, res) => {
//     res.send('Welcome to the application home page');
// });

// restrict the paths that starts with /api, return can not get access
// app.all('/api/*', (req, res) => {
//     res.send('Welcome to the api routes');
// });

// this method not restricted the api route
// app.get('/api', (req, res) => {
//     res.send('Welcome to api routes with get method');
// });

// app.delete() method
app.delete('/', (req, res) => {
    res.send('Delete request to homepage');
});

// app.disable()
// app.disable('trust proxy');
// app.get('trust proxy');

// case sensitive routing is disable by default that treated the /about and /About are equal.
// app.enable('case sensitive routing');

// app.get('/about', (req, res) => {
//     res.send('Welcome to the about page');
// });

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.listen(3000, () => {
    console.log('Server running on 3000');
});
