'use strict';

var app = angular.module('MyApp', ['ngStorage']); 

app.controller('mainCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;  
  $scope.keys = Object.keys;

  console.log('in app controller');

  $scope.readPotion = function() {
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

  $scope.addPotion = function() {
    console.log('add potion')
    var itemsArray = $localStorage.itemsArray || [];
    itemsArray.push($scope.newPotion);
    //$localStorage.itemsArray = itemsArray;  
    //$scope.potions.push($scope.newPotion);   
    $scope.newPotion = {};

  };

  $scope.deletePotion = function(potion) {
    var itemIndex = $scope.potions.indexOf(potion);
    $localStorage.itemsArray.splice(itemIndex, 1);
  };

  $scope.saveEdits = function() {    
    var itemsArray = $localStorage.itemsArray || [];

    itemsArray[itemIndexG].name = $scope.editContact.name;
    itemsArray[itemIndexG].color = $scope.editContact.phoneNumber;
    itemsArray[itemIndexG].cost = $scope.editContact.email;

    $('#myModal').modal('hide');
  };

  var itemIndexG = 0; 

  $scope.editPotion = function(potion) {
    itemIndexG = $scope.potions.indexOf(potion);
    $scope.editContact = potion;

    $('#myModal').modal('show'); 
  };

  $scope.reverse = false;

  $scope.sortContacts = function(key) {
    if($scope.reverse === false){
      $scope.orderField = key;
      $scope.reverse = true; 
    }
    else {
      $scope.orderField = key;
      $scope.reverse = false; 
    }
    
    /*
    console.log('key is: ', key);
    if(key === 'name') {
      console.log('inside key name');
      $scope.
      debugger;
    }
    */
  };
});