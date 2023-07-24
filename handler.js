const handler = (req, res) => {
    console.log(req.app.locals.title); // app.locals access throughout the application
    res.send('Hello from handler');
};

module.exports = handler;
