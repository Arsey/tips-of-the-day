var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 *Tip schema
 */

var TipSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        default: '',
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    }
});

/**
 * Validations
 */

TipSchema.path('text').validate(function (text) {
    return text.length;
}, 'Text cannot be blank');

mongoose.model('Tip', TipSchema);
