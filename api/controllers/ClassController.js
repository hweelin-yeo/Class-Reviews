'use strict';

var mongoose = require('mongoose'),
  Class = mongoose.model('Class_Model');

exports.get_all_classes = function(req, res) {
  Class.find({}, function(err, class_res) {
    if (err)
      res.send(err);
    res.json(class_res);
  });
};

exports.create_class = function(req, res) {
  var new_class = new Class(req.body);
  new_class.save(function(err, class_res) {
    if (err)
      res.send(err);
    res.json(class_res);
  });
};


exports.read_class= function(req, res) {
  Class.findById(req.params.classId, function(err, class_res) {
    if (err)
      res.send(err);
    res.json(class_res);
  });
};


exports.update_class = function(req, res) {
  Class.findOneAndUpdate({_id: req.params.classId}, req.body, {new: true}, function(err, class_res) {
    if (err)
      res.send(err);
    res.json(class_res);
  });
};


exports.delete_class = function(req, res) {

  Class.remove({
    _id: req.params.classId
  }, function(err, class_res) {
    if (err)
      res.send(err);
    res.json({ message: 'Class successfully deleted' });
  });
};