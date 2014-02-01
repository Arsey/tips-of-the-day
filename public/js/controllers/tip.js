angular.module('tips.tip').controller('TipController', ['$scope', '$routeParams', '$location', 'Global', 'Tip', function ($scope, $routeParams, $location, Global, Tips) {
    $scope.global = Global;

    $scope.edit = function () {
        Tips.query(function (tip) {
            $scope.tips = tips;

            console.log(tips);
        });
    };

}])