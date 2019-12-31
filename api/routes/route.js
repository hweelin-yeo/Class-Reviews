'use strict';

module.exports = function(app) {
  var reviewController = require('../controllers/ReviewController');
  var classController = require('../controllers/ClassController');

  app.route('/reviews')
    .get(reviewController.get_all_reviews)
    .post(reviewController.create_review);


  app.route('/reviews/:reviewId')
    .get(reviewController.read_review)
    .put(reviewController.update_review)
    .delete(reviewController.delete_review);


  app.route('/classes')
    .get(classController.get_all_classes)
    .post(classController.create_class);


  app.route('/classes/:classId')
    .get(classController.read_class)
    .put(classController.update_class)
    .delete(classController.delete_class); 
};
