'use strict';

var mongoose = require('mongoose'),
  Review = mongoose.model('Review_Model');

exports.get_reviews = function(req, res) {

  var page = parseInt(req.query.page) || 0,
    limit = parseInt(req.query.limit) || 5;

  Review.find(buildGetQuery(req.query))
        .skip(page * limit)
        .limit(limit) 
        .exec((err, review) => {
          if (err)
            res.send(err);
          res.json(review);
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

  if (params.qualityRating) {
    query["qualityRating"] = params.qualityRating;
  }

  if (params.difficultyRating) {
    query["difficultyRating"] = params.difficultyRating;
  }

  return query;
}

exports.create_review = function(req, res) {
  var new_review = new Review(req.body);
  new_review.save(function(err, review) {
    if (err)
      res.send(err);
    res.json(review);
  });
};


exports.read_review = function(req, res) {
  Review.findById(req.params.reviewId, function(err, review) {
    if (err)
      res.send(err);
    res.json(review);
  });
};


exports.update_review = function(req, res) {
  Review.findOneAndUpdate({_id: req.params.reviewId}, req.body, {new: true}, function(err, review) {
    if (err)
      res.send(err);
    res.json(review);
  });
};


exports.delete_review = function(req, res) {

  Review.remove({
    _id: req.params.reviewId
  }, function(err, review) {
    if (err)
      res.send(err);
    res.json({ message: 'Review successfully deleted' });
  });
};