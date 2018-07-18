'use strict'

var demoApp = angular.module('demo', [  'demo.controllers',
		'demo.services']);

     demoApp.constant("CONSTANTS", {
     	getAllUsers : "/user/getAllUsers",
     	saveUser : "/user/saveUser"
     });

     demoApp.directive("datepicker", function () {
         function link(scope, element, attrs, controller) {
             element.datepicker({
                 onSelect: function (val) {
                     scope.$apply(function () {
                         controller.$setViewValue(val);
                     });
                 },
                 dateFormat: "dd-mm-yy"
             });
         }
         return {
             require: 'ngModel',
             link: link
         };
     });
