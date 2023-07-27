const express = require('express');
const multer = require('multer');

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// prepare the final multer upload object
const upload = multer({
    dest: UPLOADS_FOLDER,
});
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

// single file upload - upload.single
// multiple file upload - upload.array
// app.post('/', upload.array('avatar', 3), (req, res) => {
//     res.send('Hello world');
// });

// multiple fields handle
// app.post(
//     '/',
//     upload.fields([
//         { name: 'avatar', maxCount: 1 },
//         { name: 'gallery', maxCount: 2 },
//     ]),
//     (req, res) => {
//         res.send('Hello world');
//     },
// );

// upload just a form-data like text, email etc
// app.post('/', upload.none(), (req, res) => {
//     res.send('Hello world');
// });

app.listen(3000, () => {
    console.log('app listening on port 3000');
});
