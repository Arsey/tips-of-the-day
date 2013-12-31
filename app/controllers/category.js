/**
 *  Dependencies
 */

var mongoose = require('mongoose'),
    Category = mongoose.model('Category'),
    _ = require('underscore');


/**
 * Create a category
 */

exports.create = function (req, res) {
    var category = new Category(req.body);
    console.log(category);
    category.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(category);
        }
    });
};

/**
 * Show a category
 */

exports.all = function (req, res) {
    console.log(Category);
    Category.find().exec(function (err, сategory) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(сategory)
        }
    });
}