'use strict';

angular.module('componentdemoApp')
  .factory('thingInfoPopoverConfig', function ($templateCache,$compile) {
    return function thingInfoPopoverConfig(scope, element, attrs, ctrl) {

      ctrl.html = $compile($templateCache.get('components/Config/thingInfoPopoverConfig/thingInfoPopoverConfig.html'))(scope);

      ctrl.html.bind('mouseleave', function(){
      	ctrl.actions.removeActivePopovers();
      });

      ctrl.html.scope().close = function(){
      	ctrl.actions.removeActivePopovers();
      };

      ctrl.mouseleave = function() {
      	
      }
    }
  });
