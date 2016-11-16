'use strict';

let app2 = angular.module('myApp.view2', ['ngRoute']);

app2.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);

app2.controller('View2Ctrl', ['$scope', function($scope) {

  $scope.presidents = [
    {
      firstName: 'Abraham',
      lastName: 'Lincoln'
    },
    {
      firstName: 'Andrew',
      lastName: 'Johnson'
    },
    {
      firstName: 'Ulysses',
      lastName: 'Grant'
    }
  ];

  $scope.add = function(){
    $scope.presidents.push(
        {
          firstName: $scope.president.firstName,
          lastName: $scope.president.lastName
        }
    );
    $scope.president.firstName = $scope.president.lastName = '';
  };

  $scope.remove = function(president){
    //removing presidents out of the array.
    $scope.presidents.splice($scope.presidents.indexOf(president), 1);
  };

}]);






















