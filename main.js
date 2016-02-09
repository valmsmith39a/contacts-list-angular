'use strict';
console.log('in main.js');

// use ngStorage
var app = angular.module('MyApp', ['ngStorage']); // instantiating a NEW module named "MyApp"



app.controller('mainCtrl', function($scope, $localStorage) {
  console.log('hello from main controller!');
  $scope.$storage = $localStorage;
  $scope.potions = [];
  $scope.keys = Object.keys;

  $scope.readPotion = function(){
    console.log('in read potion');
    var itemsArray = $localStorage.itemsArray || [];
    console.log('in read potion');
    $scope.potions = itemsArray; 
  };

  $scope.init = function() {
     $scope.readPotion();
  };

  $scope.init(); 

  $scope.addPotion = function(){
    console.log('in addItem()');
    console.log('new potion is: ', $scope.newPotion);
    
    $scope.potions.push($scope.newPotion);
    
    var itemsArray = $localStorage.itemsArray || [];
    itemsArray.push($scope.newPotion);
    $localStorage.itemsArray = itemsArray;     
    $scope.newPotion = {};
  };

  $scope.deletePotion = function(potion){
    console.log('in deleteItem()');
    console.log(' items array is: ', $localStorage.itemsArray);

    var itemIndex = $scope.potions.indexOf(potion);
    $scope.potions.splice(itemIndex, 1);

    var itemsArray = $localStorage.itemsArray || [];
    itemsArray.splice(itemIndex, 1);
    $localStorage.itemsArray = itemsArray;   
  };
});