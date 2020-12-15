'use strict';

module.exports = function(app) {
  var itemList = require('../controllers/controller');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // URL Endpoint Routes
  app.route('/items')
    .get(itemList.list_items)
    .post(itemList.create_item); // why POST and not PUT?

  app.route('/items/:id')
    .get(itemList.get_item)
    .put(itemList.update_item) // why PUT and not POST?
    .delete(itemList.delete_item);
};



