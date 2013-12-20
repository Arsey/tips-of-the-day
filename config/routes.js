module.exports = function(app) {
    //Article Routes
    var tips = require('../app/controllers/tips');
    app.get('/tips', tips.all);
    app.post('/tips', tips.create);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
