(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };

    toBuy.isEmpty = function () {
      return ShoppingListCheckOffService.isToBuyEmpty();
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();

    bought.isEmpty = function () {
      return ShoppingListCheckOffService.isBoughtEmpty();
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // Initial items
    var toBuyItems = [
      { name: "Apples", quantity: 5 },
      { name: "Bananas", quantity: 2 },
      { name: "Oranges", quantity: 3 },
      { name: "Milk", quantity: 1 },
      { name: "Bread", quantity: 2 },
    ];

    var boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.buyItem = function (index) {
      var boughtItem = toBuyItems.splice(index, 1)[0];
      boughtItems.push(boughtItem);
    };

    service.isToBuyEmpty = function () {
      return toBuyItems.length === 0;
    };

    service.isBoughtEmpty = function () {
      return boughtItems.length === 0;
    };
  }
})();
