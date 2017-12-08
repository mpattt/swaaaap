const  mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
       name: {
              type: String,
             // required: true,
              trim: true
       },
       description: {
              type: String
       },
       look:  String,
       send:String,

 create: {
        type: Date,
        default: Date.now
 },
 postby: {
      type: String,
     // required: true,
      trim: true
},
});

mongoose.model('Item', ItemSchema);