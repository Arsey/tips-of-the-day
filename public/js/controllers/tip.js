angular.module('tip.tip').controller('TipController', ['$scope', '$routeParams', '$location', 'Global', 'Tip', function ($scope, $routeParams, $location, Global, Tips) {
    $scope.global = Global;

    $scope.edit = function (req, res) {
        Tips.query(function (tip) {
            $scope.tips = tips;

            console.log("tips");
        });
    };

}])