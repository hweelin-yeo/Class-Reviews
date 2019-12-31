'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClassSchema = new Schema({

  department: {
    type: String,
    required: 'Department of the class'
  },

  classNum: {
    type: String,
    required: 'Class number (department & number)'
  },

  className: {
    type: String,
    required: 'Full name of the class (department & number)'
  },

  overallRating: {
    type: Number
  }

});

module.exports = mongoose.model('Classes', ClassSchema);