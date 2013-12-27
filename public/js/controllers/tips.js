angular.module('tips.tips').controller('TipsController', ['$scope', '$routeParams', '$location', 'Global', 'Tips', function ($scope, $routeParams, $location, Global, Tips) {
    $scope.global = Global;

    $scope.create = function () {
        var tips = new Tips({
            text: this.text,
            likes: this.likes,
            category: this.category
        });
        console.log(tips);
        tips.$save(function (response) {
            $location.path("/");
        });

        this.title = "";
    };

    $scope.find = function () {
        Tips.query(function (tips) {
            $scope.tips = tips;
        });
    };

    $scope.addlike = function(tip){
        tip.likes++;
        var tip_id = tip._id;
        var tips = new Tips({
            _id: tip_id
        });
        tips.$update(function (response) {
            $location.path("/");
         });
    };
    
}]);
