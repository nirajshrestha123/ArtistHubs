let mongoose = require('mongoose');

let user = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

let User = module.exports = mongoose.model('User', user);
