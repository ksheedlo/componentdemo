'use strict';

angular.module('componentdemoApp')
  // .controller('thingListConfigCtrl', function($scope, $http, socket, ThingData){
  //     $scope.things = ThingData.things;

  //     var State = ThingData.listen(function(status, payload){
  //       console.log(status);
  //     });

  //     $scope.$on('$destroy', function () {
  //       State();
  //     }); 
  // })
  .factory('thingListConfig', function ($http, socket, ThingData) {
    return function thingListConfig(scope, element, attrs, ctrl){

      scope.things = ThingData.things;

      var State = ThingData.listen(function(status, payload){
        console.log(status);
      });

      scope.$on('$destroy', function () {
        console.log('gone')
        State();
      }); 

      //over write the main functionality
      element.unbind('mouseenter');

    }
  })

  .factory('MyThingsListService', function(ThingData, Auth){
  return function MyThingsListService(scope, element, attrs, ctrl) {
    
    var setData = function(){
      scope.things = _.filter(ThingData.things, function(item){
        if(item.userId) {
          return item.userId === Auth.getCurrentUser()._id;
        }
      });
    }

    var State = ThingData.listen(function(status, payload){
      if(status==='created' || status==='loaded' || status==='updated') {
        setData();
      }
    }, setData());

    scope.$on('$destroy', function () {
      State();
    });   


  }
});
