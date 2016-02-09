'use strict';
console.log('in main.js');

// use ngStorage
var app = angular.module('MyApp', ['ngStorage']); // instantiating a NEW module named "MyApp"

app.controller('mainCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;  
  $scope.keys = Object.keys;

  $scope.readPotion = function(){
    if(!$localStorage.itemsArray) {
      $localStorage.itemsArray = [];  
      $scope.potions = $localStorage.itemsArray;
    } else {
      $scope.potions = $localStorage.itemsArray;
    }
  };

  $scope.init = function() {
     $scope.readPotion();
  };

  $scope.init(); 

  $scope.addPotion = function(){
    var itemsArray = $localStorage.itemsArray || [];
    itemsArray.push($scope.newPotion);
    $localStorage.itemsArray = itemsArray;     
    $scope.newPotion = {};
  };

  $scope.deletePotion = function(potion){
    var itemIndex = $scope.potions.indexOf(potion);
    $localStorage.itemsArray.splice(itemIndex, 1);
  };
});