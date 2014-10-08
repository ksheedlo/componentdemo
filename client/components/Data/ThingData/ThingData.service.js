'use strict';

angular.module('componentdemoApp')
  .factory('ThingData', function (RefluxService, $http, socket) {

    var api = {
      get: function(){
        return $http.get('/api/things');
      },
      save:function(thing) {
        return $http.put('/api/things/'+thing._id, thing);
      },
      saveComment:function(thing) {
        return $http.put('/api/things/'+thing._id+'/comment', thing);
      },      
      add:function(thing) {
        return $http.post('/api/things', thing);
      },
      remove:function(thing) {
        return $http.delete('/api/things/' + thing._id);
      }
    }

        return RefluxService.createStore({

      // Initial setup
      init: function() {
          this.things = [];

          this.onSocketSync();
          

          this.loaded = false;

          this.onLoad();

        },
   
      onLoad:function() {
        if(this.loaded === true) {
          console.log('already loaded')
          return;
        }

        this.loaded=true;

        api.get().success(function(awesomeThings){
          _.each(awesomeThings, function(thing){
            this.things.push(thing);
          }.bind(this));
          

          this.trigger('loaded');
        }.bind(this));

      },

      onSocketSync:function() {
        if(this.loaded === true) {
          console.log('already loaded')
          return;
        }    

        socket.syncUpdates('thing', this.things, function(event, item, array) {
          console.log(event, item);
          this.trigger(event, item)
        }.bind(this));

      },
      onSocketUnsync:function(){
        socket.unsyncUpdates('thing');
      },


    });
  });
