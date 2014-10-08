'use strict';

angular.module('componentdemoApp')
  .factory('thingInfoPopoverConfigAlt', function ($templateCache,$compile) {
    return function thingInfoPopoverConfigAlt(scope, element, attrs, ctrl) {

      var html = $compile($templateCache.get('components/Config/thingInfoPopoverConfig/thingInfoPopoverConfigAlt.html'))(scope);

      ctrl.popover.append(html);

    }
  });
