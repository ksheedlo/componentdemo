'use strict';

angular.module('componentdemoApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.things = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.things = awesomeThings;
      socket.syncUpdates('thing', $scope.things);
    });

    var newThing = $scope.newThing = {name:'', info:''};

    $scope.addThing = function() {
      if($scope.newThing.name === '') {
        return;
      }
      $http.post('/api/things', $scope.newThing);
      $scope.newThing = newThing;
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
