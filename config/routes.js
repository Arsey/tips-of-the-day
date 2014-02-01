module.exports = function(app) {
    //Article Routes
    var tips = require('../app/controllers/tips');
    app.get('/tips', tips.all);

    app.post('/tips', tips.create);
    app.post('/tips/addlike/:tipId', tips.addlike);

    //Edit tip
    app.get('/tips/getonetip/:tipId', tips.getOneTip);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

    // Category route
    var category = require('../app/controllers/category');
    app.get('/category', category.all);
};
