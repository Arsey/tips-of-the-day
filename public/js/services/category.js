//Tips service used for articles REST endpoint
angular.module('categorys.categorys').factory("Categorys", ['$resource', function($resource) {
    return $resource('categorys/:categoryId', {
        tipId: '@_id'
    }, {
        update: {
            method: 'POST'
        }
    });
}]);