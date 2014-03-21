'use strict';

angular.module('ngApp')
  .factory('restService', function($http, $routeParams) {
   return {
    getElements: function() {
      console.log($routeParams)
       return $http.get('/elements')
             .then(function(result) {
              return result.data;
            });
    },
    getElement: function(){
      return $http.get('/elements/' + $routeParams.id)
       .then(function(result) {
        return result.data;
      });
    }
   }
});