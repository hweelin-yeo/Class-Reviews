'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReviewSchema = new Schema({
  
  department: {
    type: String,
    required: true
  },

  classNum: {
    type: String,
    required: true
  },

  className: {
    type: String,
    required: true
  },

  qualityRating: {
    type: Number
  },

  difficultyRating: {
    type: Number
  },

  reviewText: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Review_Model', ReviewSchema);