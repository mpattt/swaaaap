const item = require('../controllers/item.controller');
const category = require('../controllers/category.controller');
module.exports = (app) => {
      const path = '/api/item';
      app.get(path + '/all', item.getItems);
      app.post(path + '/create', item.create);
      app.get(path + '/:id', item.getOne);
app.put(path + 'reply/:id', item.reply);
      const pathcategory = '/api/category';
      app.get(pathcategory, category.getCategories);
      app.post(pathcategory+ '/create', category.create);
}
