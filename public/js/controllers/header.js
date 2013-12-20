angular.module('tips.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
        {
            "title": "Add Tip",
            "link": "tips/create"
        }
    ];

    $scope.isCollapsed = false;
}]);