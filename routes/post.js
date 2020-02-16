const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Posts = require('../models/post');
let ObjectId = require('mongoose').ObjectId;

let formidable = require("formidable");
let fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
    let posts = Posts.find({}, function (err, posts) {
        if(err){
            console.log(err)
        }else {
            res.render('admin/post/post', {
                posts: posts
            });
        }
    });
});


router.get('/:id', function (req, res) {
    let id = Posts.findOne({'_id': Object(req.params.id)}, function (err, posts) {
        if(err){
            console.log(err)
        }else {
            res.render('admin/post/singlepost', {
                posts: posts
            });
        }
    });
});

router.post

router.post('/addPost', function (req, res, next) {
    let posts = new Posts();
    var newpath
    var formData = new formidable.IncomingForm();
    formData.parse(req, function (error, fields, files) {
        var oldPath = files.file.path;
        newpath = "G:\\Node\\artistshub\\public\\images"+files.file.name;
        fs.rename(oldPath, newpath, function (err) {
            res.send(newpath)
        })
        posts.title = req.body.title;
        posts.file = newpath;
        posts.content = req.body.content;
        posts.save(function (err) {
            if(err){
                console.log(err);
            }else {
                res.redirect('/posts')
            }
        });
    });

});




module.exports = router;
