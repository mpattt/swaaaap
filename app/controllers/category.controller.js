var Category = require('mongoose').model('Category');
var path = require("path");

exports.getCategories = (req, res, next) => {
       Category.find((err, category) => {
              if (err) {
                     console.log('Failure');
                     return next(err);
              }
              else {
                     console.log('Success');
                     res.json(category);
              }
       });
}
exports.create = (req, res, next) => {

    var category = new Category(req.body);
    category.save((err) => {
           if (err) {
                  console.log('Failure');
                  return next(err);
           }
           else {
                  console.log('Success');
                  res.json(category);
           }
    });
}

exports.deleteCategory = (req, res, next) => {
    Post.findByIdAndRemove({_id: req.params.id},(err,post) => {
                if(err){
                    return next(err);
                }else {
                    res.json(post);
                }
        });
}
