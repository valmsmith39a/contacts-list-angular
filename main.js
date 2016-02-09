'use strict';
console.log('in main.js');

// use ngStorage
var app = angular.module('MyApp', ['ngStorage']); // instantiating a NEW module named "MyApp"

app.controller('mainCtrl', function($scope, $localStorage) {

  console.log('hello from main controller!');
  console.log('before localStorage');
  /*
  $scope.$storage = $localStorage.$default({
    counter: 42
   });
  */
  $scope.$storage = $localStorage;
  //$localStorage = $localStorage.$default({itemsArray:[1,1,1]});     
  
  $scope.keys = Object.keys;


  $scope.readPotion = function(){
    console.log('in read potion');
    if(!$localStorage.itemsArray) {
      $localStorage.itemsArray = [];  
      $scope.potions = $localStorage.itemsArray;
    } else {
      $scope.potions = $localStorage.itemsArray;
    }
  };
  
  $scope.init = function() {
     console.log('inside init');
     $scope.readPotion();
  };

  $scope.init(); 

  $scope.addPotion = function(){
    //$scope.potions.push($scope.newPotion);
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