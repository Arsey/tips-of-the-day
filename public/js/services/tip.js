//Tips service used for articles REST endpoint
angular.module('tips.tips').factory("Tip", ['$resource', function($resource) {
    return $resource('tips/getonetip/:tipId', {
        tipId: '@_id'
    }, {
        update: {
            method: 'POST'
        }
    });
}]);