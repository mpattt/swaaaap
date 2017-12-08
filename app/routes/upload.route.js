var upload = require('../controllers/upload.controller');


module.exports = (app) => {
  var path = '/api/upload';
  var fs = require('fs');
  app.get('/upload', upload.upload);


  app.post('/postFormAct', upload.getItems);
}
