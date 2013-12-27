//Tips service used for articles REST endpoint
angular.module('tips.tips').factory("Tips", ['$resource', function($resource) {
    return $resource('tips/:tipId', {
        tipId: '@_id'
    }, {
        update: {
            method: 'POST'
        }
    });
}]);