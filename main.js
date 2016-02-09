'use strict';
console.log('in main.js');

// use ngStorage
var app = angular.module('MyApp', ['ngStorage']); // instantiating a NEW module named "MyApp"

app.controller('mainCtrl', function($scope, $localStorage) {
  console.log('hello from main controller!');
  $scope.$storage = $localStorage;
  $scope.potions = [];
  $scope.keys = Object.keys;

  $scope.addPotion = function(){
    console.log('in addItem()');
    console.log('new potion is: ', $scope.newPotion);
    $scope.potions.push($scope.newPotion);
    $localStorage.itemsArray = $scope.potions;    
    $scope.newPotion = {};
  };

  $scope.deletePotion = function(potion){
    console.log('in deleteItem()');
    var itemIndex = $scope.potions.indexOf(potion);
    $scope.potions.splice(itemIndex, 1);
  };
});