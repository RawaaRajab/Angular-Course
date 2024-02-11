(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";

    $scope.checkLunch = function () {
      var items = $scope.lunchItems.split(",");
      items = items.filter(function (item) {
        return item.trim() !== "";
      });
      if (items.length === 0) {
        $scope.message = "Please enter data first";
        $scope.messageStyle = { color: "red" };
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageStyle = { color: "green" };
      } else {
        $scope.message = "Too much!";
        $scope.messageStyle = { color: "red" };
      }
    };
  }
})();
