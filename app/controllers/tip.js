/**
 *  Dependencies
 */

var mongoose = require('mongoose'),
    Tip = mongoose.model('Tip'),
    _ = require('underscore');


 /**
* Get one tip
*/
exports.getOneTip = function (req, res) {
    var tipId = req.params['tipId'];
    Tip.find({_id: tipId}).exec(function (err, tip) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(tip)
        }
    });
};