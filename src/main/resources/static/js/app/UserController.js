'use strict'

var module = angular.module('demo.controllers', []);
module.controller("UserController", [ "$scope", "UserService","$http", "CONSTANTS", function($scope, UserService, $http, CONSTANTS) {

    $scope.addnewuser = false;
    $scope.model = {date: defaultDate()};

    getExistingUsers();

    function defaultDate() {
        var dfDt = new Date();
        return dfDt.getDate() + "-" + (dfDt.getMonth()+1) + "-" + dfDt.getFullYear();
    }

    function reset() {
        $scope.model = {};
        $scope.model = {date: defaultDate()};
    }

    $scope.clickAddUserButton = function() {
        $scope.addnewuser = true;
    }

    function getExistingUsers() {
         reset();
		 $http.get(CONSTANTS.getAllUsers).then(function(r) {
		        if (!r.data.error) {
                     $scope.allUsers= r.data;
                } else {
                     console.log("Error while getting users");
                }
		 });
    }

    $scope.saveNewUser = function() {
        UserService.saveUser($scope.model).then(function(r) {
                if (!r.data.error) {
                     $scope.addnewuser = false;
                     getExistingUsers();
                } else {
                     console.log("Error while saving user");
                     }
        });
    }

} ]);