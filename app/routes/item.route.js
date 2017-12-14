const item = require('../controllers/item.controller');
const category = require('../controllers/category.controller');
module.exports = (app) => {
      const path = '/api/item';
      const pathcategory = '/api/category';
      app.get(path + '/all', item.getItems);
      app.post(path + '/create', item.create);
      app.get(pathcategory, category.getCategories);
      app.post(pathcategory+ '/create', category.create);
}
