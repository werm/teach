'use strict';

angular.module('ngApp')
  .controller('HtmlCtrl', function ($scope, htmlService) {
     $scope.aceLoaded = function(_editor) {
        // Options
        _editor.setValue("the new text here")
      };

    htmlService.getElements().then(function(elements){
      $scope.elements = elements;
    });
  });
