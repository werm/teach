'use strict';

angular.module('ngApp')
  .factory('htmlService', function($http) {
   return {
    getElements: function() {
       //return the promise directly.
       return $http.get('/elements')
             .then(function(result) {
              //resolve the promise as the data
              return result.data;
            });
    }
   }
});