/**
 *  Dependencies
 */

var mongoose = require('mongoose'),
    Tip = mongoose.model('Tip'),
    _ = require('underscore');


/**
 * Create a tip
 */

exports.create = function (req, res) {
    var tip = new Tip(req.body);
    console.log(tip);
    tip.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(tip);
        }
    });
};

/**
 * Show a tip
 */

exports.show = function (req, res) {
    res.jsonp(req.tip);
};

/**
 * List of Tips
 */

exports.all = function (req, res) {
    Tip.find().sort('-likes').exec(function (err, tips) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(tips)
        }
    });
}

/**
 * Add like
 */

exports.addlike = function(req, res){
    var tip = new Tip({
        _id: req.body._id
    });
    tip.update({$inc: {likes: 1}}, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(tip);
        }
    });
    console.log("added like for: " + req.body._id);
}
