var Item = require('mongoose').model('Item');
var path = require("path");

exports.getItems = (req, res, next) => {
    Item.find((err, item) => {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(item);
            res.json(item);
        }
    });
}


exports.create = (req, res, next) => {
    var item = new Item(req.body);
    item.save((err) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(item);
        }
    });
}

exports.getOne = (req, res, next) => {
        Item.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });

}




exports.reply = (req, res, next) => {
        Item.update({ _id: req.params.id },{ offerusername : req.body.reply,
        offerimg: req.body.img,
          offeritemname: req.body.name,
          offerdescription: req.body.description } 
, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });

}
