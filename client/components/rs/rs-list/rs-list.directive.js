'use strict';

angular.module('componentdemoApp')
  .directive('rsList', function ($injector, $http, socket) {

    return {
      // templateUrl: 'components/material/material-list/material-list.html',
      scope:true,
      restrict: 'E',
      controller:function($scope, $element, $attrs){

      },
      link:function (scope, element, attrs, ctrl, transcludeFn) {

        element.bind('mouseenter', function() {
          console.log('you entered into the element');
        });

        // var Config = attrs.config ? $injector.get(attrs.config) : function(){};
        // Config(scope, element, attrs, ctrl);

      }
    };
  });