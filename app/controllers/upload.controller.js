var mime    =   require('mime');
var path = require("path");
var multer = require('multer');

var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});
var upload = multer({ storage : storage }).array('userPic');

exports.getItems = (req, res, next) => {


 upload(req,res,function(err) {
   console.log(req.files); // Here i getting proper output and image also uploading to concern folder

 });
}

exports.upload = (req, res) => {
    res.sendFile((path.join(__dirname + '/../views/upload.html')));
}
