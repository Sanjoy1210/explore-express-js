/*
  Title - Asynchronous error handling

*/

const express = require('express');
const fs = require('fs');

const app = express();

// app.get('/', (req, res, next) => {
//     fs.readFile('/file-does-not-exist', (err, data) => {
//         if (err) {
//             next(err);
//         } else {
//             res.send(data);
//         }
//     });
// });

app.get('/', (req, res, next) => {
    setTimeout(() => {
        try {
            console.log(a);
        } catch (err) {
            next(err);
        }
    }, 100);
});

app.use((req, res, next) => {
    console.log('I am not called');
    next();
});

// custom error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('There was a problem!');
    } else if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.send('there was an error');
    }
});

app.listen(3000, () => {
    console.log('app listening at port 3000');
});
