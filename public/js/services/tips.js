//Tips service used for articles REST endpoint
angular.module('tips.tips').factory("Tips", ['$resource', function($resource) {
    return $resource('tips/:articleId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);