'use strict';

let app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.style = {
    'color': 'purple',
    'fontSize': '45px',
    // 'textShadow': '1px 2px black'
    'textAlign': 'center'

  };

  $scope.signUp = function(){
    var person = {
      firstName: $scope.user.firstName,
      lastName: $scope.user.lastName,
      gender: $scope.user.gender
    };
    console.log(person);
  };

}]);