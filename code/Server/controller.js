'use strict';

var mongoose = require('mongoose');
var Item = mongoose.model('Items'); // defined in model.js

exports.list_items = function(req, res) {
  Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.get_item = function(req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.update_item = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.delete_item = function(req, res) {
  Item.remove({
    _id: req.params.id
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};

exports.create_item = function(req, res) {
  var item = new Item(req.body);
  item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};
