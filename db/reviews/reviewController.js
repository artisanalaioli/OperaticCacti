var Review = require('./reviewModel.js');

var reviewController = {
    // req.body.review = {
    //   tour: tour_title, 
    //   reviewer: user_id, 
    //   guide: user_id,
    //   content: content,
    //   time: time // this maybe not necessary, since query has timestamp  
    // }

  post: function(req, res) {
    console.log('post a review, req.body = ', req.body);
    Review.create(req.body) 
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.error('error in post review, ', err);
        res.sendStatus(501);
      });
  },
  getAllForOneTour: function(req, res) {
    Review.findAll({})
      .then(function(reviews) {
        res.json(reviews);
      })
      .catch(function(err) {
        console.log('error in getting all reviews for one tour, ', err);
        res.sendStatus(404);
      });
  },
  getAllForOneGuide: function(req, res) {
    var guideName = req.body.guideName;
    Review.findAll({
      include:[{
        model: User,
        where: {name: guideName}
      }]
    })

  }
}

module.exports = reviewController;