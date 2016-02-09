'use strict';

var app = angular.module('MyApp', ['ngStorage']); 

app.controller('mainCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;  
  $scope.keys = Object.keys;
  $scope.reverse = false;

  var itemIndexG = 0; 
  var nameG; 
  var phoneNumberG; 
  var emailG; 

  $scope.readContacts = function() {
    if(!$localStorage.itemsArray) {
      $localStorage.itemsArray = [];  
      $scope.contacts = $localStorage.itemsArray;
    } else {
      $scope.contacts = $localStorage.itemsArray;
    }
  };

  $scope.init = function() {
     $scope.readContacts();
  };

  $scope.init(); 

  $scope.addContact = function() {
    var itemsArray = $localStorage.itemsArray || [];
    itemsArray.push($scope.newContact);
    $scope.newContact = {};
  };

  $scope.deleteContact = function(contact) {
    var itemIndex = $scope.contacts.indexOf(contact);
    $localStorage.itemsArray.splice(itemIndex, 1);
  };

  $scope.saveEdits = function() {    
    var itemsArray = $localStorage.itemsArray || [];

    itemsArray[itemIndexG].name = $scope.editContact.name;
    itemsArray[itemIndexG].phoneNumber = $scope.editContact.phoneNumber;
    itemsArray[itemIndexG].email = $scope.editContact.email;

    nameG = '';
    phoneNumberG = ''; 
    emailG = '';

    $('#myModal').modal('hide');
  };

  $scope.closeModal = function() {    
    var itemsArray = $localStorage.itemsArray || [];

    $scope.editContact.name = nameG; 
    $scope.editContact.phoneNumber = phoneNumberG; 
    $scope.editContact.email = emailG; 

    nameG = '';
    phoneNumberG = ''; 
    emailG = '';

    $('#myModal').modal('hide');
  };

  $scope.edit = function(contact) {
    itemIndexG = $scope.contacts.indexOf(contact);
    $scope.editContact = contact;

    nameG = contact.name; 
    phoneNumberG = contact.phoneNumber; 
    emailG = contact.email; 

    $('#myModal').modal('show'); 
  };

  $scope.sortContacts = function(key) {
    if($scope.reverse === false){
      $scope.orderField = key;
      $scope.reverse = true; 
    }
    else {
      $scope.orderField = key;
      $scope.reverse = false; 
    }
  };
});