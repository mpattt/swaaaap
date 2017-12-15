const  mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
      itemimage: {
        type: String,
        required: true,
        trim: true
      },
      itemname: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String
      },
      lookfor:  String,
      transfer: String,
      category: String,
      owner: {
        type: String,
        trim: true
      },
      status:{
        type: String,
        default: 'wait'
      },
      swapper: String,
      swappeditem:String,
      created: {
        type: Date,
        default: Date.now
      },
      offer:[{
        offerusername: String,
        offerimg:String ,
        offeritemname: {type:String,  unique: true},
        offerdescription: String,
      }]
});

mongoose.model('Item', ItemSchema);
