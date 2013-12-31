var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 *Tip schema
 */

var CategorySchema = new Schema({
    name: {
        type: String,
        default: 'noname',
    },
});

/**
 * Validations
 */

CategorySchema.path('name').validate(function (name) {
    return name.length;
}, 'Name cannot be blank');

mongoose.model('Category', CategorySchema);
