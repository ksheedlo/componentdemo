'use strict';

angular.module('componentdemoApp')
.factory('rsPopoverStore', function(RefluxService){
    return RefluxService.createStore({

      // Initial setup
      init: function() {
          this.popovers = [];
        },

      removeActivePopovers:function(){
        if(this.popovers.length>0) {
          this.popovers.shift()[0].remove();
        }
      },
      addPopover:function(element, popover) {
        this.popovers.push(popover);
        element.before(popover);

        //make sure we destroy the popover after it is initated in the dom
        popover.scope().$on('$destroy', function(){
          this.removeActivePopovers();
        }.bind(this));
        
      }


    });
})
  .directive('rsPopover', function ($injector, $compile, rsPopoverStore) {
    return {
      // templateUrl: 'components/material/popover/popover.html',
      restrict: 'A',
      scope:true,
      controller:function($scope, $element, $attrs){
        
        this.actions = rsPopoverStore;

        this.createPopover = function(element) {
          //create and setup the popover
          var popover = angular.element('<div class="popoverWindow"></div>').width(300);
          var offset = element.position().left-(popover.width()+10);
          popover.css({
            left:offset
          });
          this.popover = popover;
        }

        this.setPopoverHtml = function(){
          this.popover.html(this.html);
        }

        this.popover;
        
        this.html;

        this.mouseenter = function() {
          this.createPopover($element);
          
          this.actions.removeActivePopovers();
          
          this.setPopoverHtml();
          
          this.actions.addPopover($element, this.popover);

        }

        this.mouseleave = function(){
          this.actions.removeActivePopovers();
        }
      },
      link: function (scope, element, attrs, ctrl) {
      	

      	//default element functionality
        element.hover(function(){
          ctrl.mouseenter();
        }, function(){
          ctrl.mouseleave();
        });

      	var Config = attrs.rsPopover ? $injector.get(attrs.rsPopover) : function(){};
      	Config(scope, element, attrs, ctrl);

      }
    };
  });
//$34.988
//512-719-6237







