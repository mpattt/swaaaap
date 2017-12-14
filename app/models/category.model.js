const mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    categoryname: {
      type: String,
      unique: true,
      //required: true,
      trim: true
    },
    value: String,
    quantity:{
      type:Number,
      default: 0
    }
});

mongoose.model('Category', CategorySchema);
