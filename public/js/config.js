//Setting up route
angular.module('tips').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/tips/create', {
            templateUrl: 'views/tips/create.html'
        }).
        when('/', {
            templateUrl: 'views/tips/list.html'
        })
    }
]);

//Setting HTML5 Location Mode
angular.module('tips').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);