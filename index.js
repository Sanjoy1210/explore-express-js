const express = require('express');
const multer = require('multer');
const path = require('path');

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// define storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-');
        cb(null, fileName + Date.now() + fileExt);
    },
});

// prepare the final multer upload object
const upload = multer({
    // dest: UPLOADS_FOLDER,
    storage,
    limits: {
        fileSize: 1000000, // 1MB
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'avatar') {
            if (
                file.mimetype === 'image/png'
                || file.mimetype === 'image/jpg'
                || file.mimetype === 'image/jpeg'
            ) {
                cb(null, true); // error back pattern, first parameter err, second allow(true/false)
            } else {
                // cb(null, false);
                cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
            }
        } else if (file.fieldname === 'doc') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true);
            } else {
                cb(new Error('Only .pdf format allowed!'));
            }
        }
    },
});
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

// single file upload - upload.single
// multiple file upload - upload.array
// app.post('/', upload.single('avatar'), (req, res) => {
//     res.send('Hello world');
// });

app.post(
    '/',
    upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'doc', maxCount: 1 }, , ]),
    (req, res) => {
        // console.log(req.file) // single file
        console.log(req.files); // multiple files
        res.send('Hello world');
    },
);

app.use((err, req, res, next) => {
    if (err) {
        // catch the multer error
        if (err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error!');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send('success');
    }
});

app.listen(3000, () => {
    console.log('app listening on port 3000');
});
