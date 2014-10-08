'use strict';

angular.module('componentdemoApp')
  .directive('rsListItem', function ($injector) {
    return {
      // templateUrl: 'components/material/material-list-item/material-list-item.html',
      scope:true,
      restrict: 'E',
      require:"^rsList",
      controller:function($scope, $element, $attrs){},
      link: function (scope, element, attrs, ctrl) {
      	var Config = attrs.config ? $injector.get(attrs.config) : function(){};
      	Config(scope, element, attrs, ctrl);
      }
    };
  })
  //   .directive('rsListPrimary', function ($injector) {
  //   return {
  //     restrict: 'C',
  //     scope:{},
  //     require:"^rsListItem",
  //     link: function (scope, element, attrs, ctrl) {
        
  //       var Config = attrs.config ? $injector.get(attrs.config) : function(){};

  //       Config(scope, element, attrs, ctrl);

  //     }
  //   };
  // })
  // .directive('rsListSecondary', function ($injector) {
  //   return {
  //     restrict: 'C',
  //     scope:{},      
  //     require:"^rsListItem",
  //     link: function (scope, element, attrs, ctrl) {

  //       var Config = attrs.config ? $injector.get(attrs.config) : function(){};

  //       Config(scope, element, attrs, ctrl);

  //     }
  //   };
  // })
  ;