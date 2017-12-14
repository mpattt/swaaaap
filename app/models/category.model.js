const mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  categoryname: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: String,
    required: true,
    trim: true
  }
});

mongoose.model('Category', CategorySchema);
