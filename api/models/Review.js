'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReviewSchema = new Schema({
  
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

  rating: {
    type: Number
  }

  summmaryKeywords: {
    type: [{
      type: String
    }]
  }

});

module.exports = mongoose.model('Reviews', ReviewSchema);