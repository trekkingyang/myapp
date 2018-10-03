var express = require('express');
var router = express.Router();
var upload = require('./fileupload');

//文件上传服务
router.post('/upload', upload.single('avatar'), function (req, res, next) {
  if (req.file) {
    console.log(req.file);
    res.send({code:0,url:'http://127.0.0.1:8081/myapp/uploads/'+req.file.filename})
  }
});

module.exports = router;