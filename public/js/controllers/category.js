angular.module('category.category').controller('CategoryController', ['$scope', '$routeParams', '$location', 'Global', 'Category', function ($scope, $routeParams, $location, Global, Category) {
    $scope.global = Global;

    $scope.find = function () {
        Category.query(function (category) {
            $scope.category = category;
        });
    };
    
}]);