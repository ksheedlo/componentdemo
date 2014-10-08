'use strict';

angular.module('componentdemoApp')
  .factory('thingListItemConfigAlt', function () {
    return function thingListItemConfigAlt(scope, element, attrs, ctrl) {
        scope.deleteThingAlt = function(thing) {
          console.log('test')
          alert('test');
        };
    };
  });
