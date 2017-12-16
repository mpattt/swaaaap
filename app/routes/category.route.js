const category = require('../controllers/category.controller');
module.exports = (app) => {
      const pathcategory = '/api/category';
      app.get(pathcategory, category.getCategories);
      app.post(pathcategory+ '/create', category.create);
   app.get(pathcategory + '/delete/:id',category.deleteCategory)
}
