angular.module('tips.tips').controller('TipsController', ['$scope', '$routeParams', '$location', 'Global', 'Tips', function ($scope, $routeParams, $location, Global, Tips) {
    $scope.global = Global;

    $scope.createTip = function () {
        var tips = new Tips({
            text: this.text,
            likes: this.likes,
            category: this.category
        });
        tips.$save(function (response) {
            $location.path("/");
        });

        this.title = "";
    };

    $scope.showTip = function () {
        Tips.query(function (tips) {
            $scope.tips = tips;

            tips.linkEdit = 'tips/edit/';

            // show tips size
            function Settings (minLikes, maxLikes) {
                var that = this;
                that.size = {
                    min: 26,
                    max: 300
                };
                that.maxLikes = maxLikes;
                that.minLikes = tips[0].likes;
                that.valueOfdivision = (function(){
                    return (that.size.max - that.size.min)/that.maxLikes
                })()
            }

            function startIsotope(){
                var el = $('#isotope-container');
                el.isotope({
                    itemSelector: '.isotope-element',
                    layoutMode: 'fitRows',
                    sortBy: 'number',
                    sortAscending: true,
                });
                return el;
            }

            var maxLikes = 0;
            var minLikes = 0;
            for (var i = 0; i < tips.length; i++) {
                if(maxLikes <= tips[i].likes)maxLikes = tips[i].likes;
                if(minLikes >= tips[i].likes)minLikes = tips[i].likes;
            };
            tips.settingsView = new Settings(minLikes, maxLikes);

            $scope.$watch('tips', function () {
                $scope.$evalAsync(function () {
                    var isotope = startIsotope();
                });
            })

        });
    };

    $scope.updateTip = function (tip) {
        var tip = new Tips(tip);
        tip.$update(tip, function(){
            console.log("update updateTip: ", tip._id);
        }, function(){
            console.warn("error updateTip:", tip._id);
        });
    };

    $scope.getTip = function () {
        Tips.query(function (tip) {
            $scope.tip = tip;
            console.log(tip);
        });
    };

    $scope.editTip = function(tip){
        console.log("edit tip");
    };

}])