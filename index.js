const express = require('express');

const app = express();

// app.use(express.json({ strict: true }));
// app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());
app.use(
    express.static(`${__dirname}/public/`, {
        index: 'home.html',
    }),
);

// we can create multiple router object at the same time
// router1, router2, ...., routerN
const router = express.Router({
    caseSensitive: true, // default false
});

app.use(router);

// app.get('/', (req, res) => {
//     res.send('This is home page');
// });

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('This is home page with post request');
// });

// use router instead of app, return the same output
router.get('/about', (req, res) => {
    res.send('This is home page');
});

router.post('/', (req, res) => {
    res.send('This is home page with post request');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
