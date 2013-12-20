angular.module('tips.tips').controller('TipsController', ['$scope', '$routeParams', '$location', 'Global', 'Tips', function ($scope, $routeParams, $location, Global, Tips) {
    $scope.global = Global;

    $scope.create = function () {
        var tips = new Tips({
            text: this.text
        });
        tips.$save(function (response) {
            $location.path("tips/" + response._id);
        });

        this.title = "";
    };

    $scope.find = function () {
        Tips.query(function (tips) {
            $scope.tips = tips;
        });
    };
}]);