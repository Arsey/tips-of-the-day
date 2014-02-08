/**
 *  Dependencies
 */

var mongoose = require('mongoose'),
    Tip = mongoose.model('Tip'),
    _ = require('underscore');


exports.createTip = function (req, res) {
    var tip = new Tip(req.body);
    tip.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(tip);
        }
    });
};

exports.getAllTips = function (req, res) {
    Tip.find().sort('-likes').exec(function (err, tips) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(tips)
        }
    });
};

exports.updateTip = function(req, res){
    var tip = new Tip({
        _id: req.body._id
    });
    var updateTip = {
        likes: req.body.likes,
        category: req.body.category,
        text: req.body.text
    }
    tip.update({$set: updateTip}, function(err){
        if(err){
            console.log(err);
        }else{
            res.jsonp(tip);
        }
    });
};

exports.getTip = function (req, res) {
    var tipId = req.params['tipId'];
    Tip.find({_id: tipId}).exec(function (err, tip) {
        if (err) {
            console.log(err);
            console.log("get one tip:",tipId);
        } else {
            res.jsonp(tip)
        }
    });
};
