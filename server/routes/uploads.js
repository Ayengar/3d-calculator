var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: `${__dirname}/../uploads`,
  filename: (req, file, cb) =>{
    const fileName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  }
})

const uploadFile = multer({storage}).single('model');

router.post('/', uploadFile, (req, res) => {
  console.log(req.file);
  if (req.file) return res.json({msg: 'model uploaded'});

  res.send('upload failed');
})

module.exports = router;
