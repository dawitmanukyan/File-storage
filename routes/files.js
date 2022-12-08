var express = require('express');
var router = express.Router();
const getFiles = require('../folder');
const files = getFiles('files');
const allfiles = require('../controllers/getFilesController');

router.get("/files", (req,res) => {
    res.render('files', {
        files
    })
});

module.exports = router;