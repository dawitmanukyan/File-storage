var express = require('express');
var router = express.Router();
const getFiles = require('../folder');
const files = getFiles('files');

const getfiles = (req,res) => {
    res.render('files', {
        files
    })
}

module.exports = getfiles;