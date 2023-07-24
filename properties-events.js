const express = require('express');
const handler = require('./handler');

const app = express();
const admin = express();

// app.locals.title = 'My App';

app.get('/', (req, res) => {
    console.log('Welcome to the application home');
});

app.post('/', (req, res) => {
    res.send('Welcome ot application home page with post method');
});

// app.mountpath
// app.use(['/admin', '/manager'], admin);

// admin.get('/', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Admin Homepage');
// });

// mount event
// admin.on('mount', (parent) => {
//     console.log('Admin mounted');
//     console.log(parent);
// });

admin.get('/', (req, res) => {
    res.send('Welcome to the admin homepage');
});

app.use('/admin', admin);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
