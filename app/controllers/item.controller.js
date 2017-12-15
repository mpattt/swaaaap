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

exports.deleteCategory = (req, res, next) => {
    Item.findByIdAndRemove({_id: req.params.id},(err,data) => {
                if(err){
                    return next(err);
                }else {
                    res.json(data);
                }
        });
}


exports.editstatus = (req, res, next) => {
    Item.findByIdAndUpdate({ _id: req.params.id },{status: "swapped",swapper: req.params.username,swappeditem:req.params.itemname}, (err, data) => {
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
        Item.findOneAndUpdate({
          _id: req.params.id },{ $push: { offer: {offerusername : req.body.reply,
            offerimg: req.body.img,
          offeritemname: req.body.name,
            offerdescription: req.body.description }}}
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
