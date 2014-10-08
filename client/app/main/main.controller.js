'use strict';

angular.module('componentdemoApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing, userId:Auth.getCurrentUser()._id });
      $scope.newThing = '';
    };

  })
.factory('customOffcanvas', function($compile, ThingData, $templateCache){
  return function(scope, element, attrs, ctrl){
    ctrl.instanceWidth=600;
    var html = $templateCache.get('app/account/settings/settings.html');
    ctrl.html = $compile(angular.element(html))(scope);
  }
})
  ;
