(function () {
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service(`ShoppingListCheckOffService`,ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var checkoff = this;
  checkoff.message="";
  checkoff.itemslist=ShoppingListCheckOffService.getitemlist();
  console.log("Items List:",checkoff.itemslist);
  checkoff.buyitem = function (itemIndex) {
      ShoppingListCheckOffService.removeitem(itemIndex);
      if(checkoff.itemslist.length===0)
      checkoff.message="Everything is bought!";
  }
}

function AlreadyBoughtController(ShoppingListCheckOffService){
  var list = this;
  list.boughtlist = ShoppingListCheckOffService.getboughtlist();
  console.log("Bought Items List:",list.boughtlist);
}

function ShoppingListCheckOffService()
{
  var service=this;
  var itemslist = [{name: "Cookies",quantity :"10 Bags"},
  {name: "Soft Drinks",quantity :"5 Bottles"},
  {name: "Biscuits",quantity :"2 Packets"},
  {name: "Potato Chips",quantity :"5 Packets"},
  {name: "Ice Cream",quantity :"10 Cups"}];
  var boughtlist =[];
  service.getitemlist = function () {
    return itemslist;
  }
  service.getboughtlist = function () {
    return boughtlist;
  }
  service.removeitem = function (index){
    boughtlist.push(itemslist[index]);
    itemslist.splice(index,1);
  }
}

})();
