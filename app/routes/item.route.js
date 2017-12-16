const item = require('../controllers/item.controller');
module.exports = (app) => {
      const path = '/api/item';
      app.get(path + '/all', item.getItems);
      app.post(path + '/create', item.create);
      app.get(path + '/:id', item.getOne);
      app.put(path + '/reply/:id', item.reply);
      app.put(path + '/edititemstatus/:id/:username/:itemname', item.editstatus);


}
