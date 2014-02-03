//Tips service used for articles REST endpoint
angular.module('tip.tip').factory("Tip", ['$resource', function($resource) {
    return $resource('tip/getonetip/:tipId', {
        tipId: '@_id'
    }, {
        update: {
            method: 'POST'
        }
    });
}]);