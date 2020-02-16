const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin/post/post');

});

router.get('/addpost', function(req, res, next) {
    res.render('admin/post/addpost');

});

router.post('/addPost', function (req, res, next) {
    console.log(req.body.email);
    console.log(req.body.password);
});

module.exports = router;
