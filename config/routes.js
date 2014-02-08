module.exports = function(app) {
    //Article Routes
    var tips = require('../app/controllers/tips');

    app.get('/tips', tips.getAllTips);
    app.get('/tips/:tipId', tips.getTip);

    app.post('/tips', tips.createTip);
    app.post('/tips/:tipId', tips.updateTip);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

    // Category route
    var category = require('../app/controllers/category');
    app.get('/category', category.all);
};
