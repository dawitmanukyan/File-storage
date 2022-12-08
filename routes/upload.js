var express = require('express');
const multer = require('multer');
var router = express.Router();
const upload = multer({dest: "files"});
const storageConfig = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"files")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})

router.get("/upload",(req,res) => {
    res.render('upload', {
        title: "Upload",
        buttonTitle: "Add"
    });
})

router.post("/upload", multer({storage: storageConfig}).single('add_file'), (req,res,next) => {
    let add_file = req.file;
    if(!add_file) res.render('upload', {error: 'there is no file'})
    else
    res.render('upload', {
        title: "Upload",
        buttonTitle: "Add",
        success: 'Ok file added'
    });
});
module.exports = router;