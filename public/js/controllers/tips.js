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
        console.log($scope);
        Tips.query(function (tips) {
            $scope.tips = tips;

            
if($scope.$last){
 $timeout(function() {
    alert()
     $('#isotope-container').isotope({
                      itemSelector : '.isotope-element',
                        layoutMode : 'fitRows',
                        sortBy: 'number',
                        sortAscending: true
    });

 },100);
}           


        });
    };

    $scope.addlike = function(tip){
        tip.likes++;
        var tip_id = tip._id;
        console.log(tip);
        var tips = new Tips({
            _id: tip_id
        });
        tips.$update(function (response) {
            $location.path("/");
         });
    };
    
}])
.directive('lalalaDirective',function($timeout){

    $timeout(function initIsotope() {

        $('#isotope-container').isotope({
            itemSelector : '.isotope-element',
            layoutMode : 'fitRows',
            sortBy: 'number',
            sortAscending: true
        });

    },100)

     return {};

});
