var express = require('express');
var router = express.Router();
let Posts = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  let posts = Posts.find({}, function (err, posts) {
    if(err){
      console.log(err)
    }else {
      res.render('index', { title: 'Express',
        posts: posts
      });
    }
  });
});

module.exports = router;
