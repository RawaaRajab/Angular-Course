(function (){
    "use strict";

    angular.module("myFirstApp", [])

    .controller("MyFirstController", function ($scope) {
        $scope.name = "Rawaa";
        $scope.sayHello = function () {
            return "Hello Coursera!";
        }
    });

})();