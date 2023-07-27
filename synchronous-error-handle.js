const express = require('express');

const app = express();

// error handling for synchronous code
app.get('/', (req, res, next) => {
    // throw new Error('There was an error!');

    // as this is a synchronous code, it automatically handled by express
    // res.send(a);

    for (let i = 0; i <= 10; i++) {
        if (i === 5) {
            next('There was an error!');
        } else {
            res.write('a');
        }
    }
    res.end();
});

// 404 error handler
app.use((req, res, next) => {
    // res.send('Requested url was not found!');
    next('Requested url was not found!');
});

// invisible default error handling middleware
/*
    app.use((err, req, res, next) => {

    })
*/

/*
    user defined error handling middleware, this will be the last middleware function.
    after this, there will be no middleware defined
*/
app.use((err, req, res, next) => {
    // console.log(err.message);
    // without status code, it will 200 or success
    // res.send('There was an error!');

    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // this error will be handled in this way
    if (res.headersSent) {
        next('There was a problem!');
        // this will call the express default error handler
    } else if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('There was an error');
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
