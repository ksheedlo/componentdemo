'use strict';

angular.module('componentdemoApp')
  .factory('thingListItemConfig', function ($http, rsOffcanvasActions, rsOffcanvasStore) {
      return function thingListItemConfig(scope, element, attrs, ctrl) {
        scope.deleteThing = function(thing) {
          $http.delete('/api/things/' + thing._id);
        };
        scope.closeAll = function(){
        	console.log(rsOffcanvasStore.instances);
        	rsOffcanvasActions.add();
        	// rsOffcanvasStore.instances[0].fadeOut();
        }

        var State = rsOffcanvasStore.listen(function(event, payload){
        	if( element.children().find(rsOffcanvasStore.elements[0]).length>0 ){
        		element.addClass('btn-success');
        	} else {
        		element.removeClass('btn-success');
        	}
        });

        
    };
  });
