'use strict';

angular.module('componentdemoApp')
.factory('rsOffcanvasActions', function(RefluxService){
  var actions = ['add','remove']
  return RefluxService.createActions(actions);
})
.factory('rsOffcanvasStore', function(RefluxService, rsOffcanvasActions){
    return RefluxService.createStore({

      // Initial setup
      init: function() {
          this.instances = [];
          this.elements = [];

          this.listenTo(rsOffcanvasActions.add, this.addInstance);
          this.listenTo(rsOffcanvasActions.remove, this.removeActiveInstances);
        },

        removeActiveInstances:function(instance, element){

            this.elements.length=0;
            this.trigger('removed');
        },
        addInstance:function(instance, element) {
          this.instances.length=0;
          this.elements.length=0;
          this.instances.push(instance);
          this.elements.push(element);
          this.trigger('add', instance);
        },
        removeAll:function(){
          this.trigger('removeAll');
        }


    });
})


  .directive('rsOffcanvas', function ($injector, $compile, rsOffcanvasStore, rsOffcanvasActions) {
    return {
      // templateUrl: 'components/rs/rs-offcanvas/rs-offcanvas.html',
      restrict: 'EA',
      scope:true,
      controller:function($scope, $element, $attrs){
        var ths = this;


        this.instance;

        this.html;

        this.instanceWidth=300;


        this.slideIn = function(){
          return $.Velocity(this.instance, {
            translateX: 0
          }, {
            duration:400,
            easing: "swing",
          });
        }

        this.slideOut = function(instance){
          return $.Velocity(instance, "reverse");
        }



        this.bindIn = function() {
          $element.unbind('click');
          $element.click(function(){
            this.instanceIn();
          }.bind(this));
        }
        this.bindOut = function() {
          $element.unbind('click');
          $element.click(function(){
            this.instanceOut();
          }.bind(this));
        }

        this.instanceIn = function(element, instance, callback){

          // this.removeActiveInstances();

          this.createInstance();

          this.setInstanceHtml();

          this.addInstance(angular.element('body'), this.instance);

          this.slideIn().then(function(){
            callback();
          });
          
          this.bindOut();

        }

        this.instanceOut = function(instance) {
          this.bindIn();

          if(!instance) {
            instance = this.instance;
          }

          this.slideOut(instance).then(function(){
            ths.instance.remove();
            delete ths.instance;
            rsOffcanvasActions.remove(ths.instance, $element);

          });
        }


        this.createInstance = function() {
          this.instance = angular.element('<div class="offcanvas"></div>')
          .width(ths.instanceWidth)
          .velocity({translateX:'-'+ths.instanceWidth+'px'},0);

        }


        this.setInstanceHtml = function(){
          this.instance.html(this.html);
          $compile(this.instance)($scope);
        }



        
        this.addInstance = function(element, instance) {
          rsOffcanvasActions.add(ths.instance, $element);
          element.append(instance);
        }

        this.removeActiveInstances = function() {
          rsOffcanvasStore.removeActiveInstances();
        }




        this.State = rsOffcanvasStore.listen(function(status, payload){
          if(!ths.instance) {
            return;
          }
          if(status === 'add' && payload !== ths.instance) {
            ths.instanceOut(ths.instance);
          }
        });


      },

      link: function (scope, element, attrs, ctrl) {


        ctrl.html = $compile(angular.element('<input type="text">'))(scope);


        var Config = attrs.rsOffcanvas ? $injector.get(attrs.rsOffcanvas) : function(){};
        Config(scope, element, attrs, ctrl);

        element.click(function(){
          ctrl.instanceIn();
        }.bind(this));

        scope.$on('$destroy', function(){
          console.log('gone')
          ctrl.State();
        });

        scope.$on('$stateChangeStart', function(){
          if(!ctrl.instance) {
            return;
          }
            ctrl.instance.remove();
            delete ctrl.instance;
            rsOffcanvasActions.remove(ctrl.instance, element);
        });

      }
    };
  });