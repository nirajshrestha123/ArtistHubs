let express = require('express');
let router = express.Router();
let Users = require('../models/user');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('admin/user');
});


router.post('/dashboard', function (req, res, next) {
  res.redirect('/posts');

});

router.get('/register', function(req, res, next) {
  res.render('admin/user');
});

router.post('/register', function (req, res, next) {
  let users = new Users();
  console.log(req.body.email);
  console.log(req.body.password);
  users.email = req.body.email;
  users.password = req.body.password;
  users.save(function (err) {
    if(err){
      console.log(err);
    }else {
      res.redirect('/users/login');
    }
  })
});


module.exports = router;
