'use strict';

var mongoose = require('mongoose'),
  Class = mongoose.model('Class_Model');

exports.get_classes = function(req, res) {

  var page = parseInt(req.query.page) || 0,
    limit = parseInt(req.query.limit) || 5;

  Class.find(buildGetQuery(req.query))
        .skip(page * limit)
        .limit(limit) 
        .exec((err, class_res) => {
          if (err)
            res.send(err);
          res.json(class_res);
        });
};

const buildGetQuery =  (params) => {
  var query = {};

  if (params.className) {
    query["className"] = params.className;
  }

  if (params.department) {
    query["department"] = params.department;
  }

  if (params.overallQualityRating) {
    query["overallQualityRating"] = params.overallQualityRating;
  }

  if (params.overallDifficultyRating) {
    query["overallDifficultyRating"] = params.overallDifficultyRating;
  }

  return query;
}

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