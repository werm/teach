'use strict';

angular.module('ngApp')
  .controller('HtmlCtrl', function ($scope, restService) {
    restService.getElements().then(function(elements){
      $scope.elements = elements;
    });
  });

  angular.module('ngApp')
    .controller('ShowHtmlCtrl', function ($scope, restService, $routeParams) {
      console.log($routeParams)
      $scope.aceLoaded = function(_editor){
       // Editor part
       console.log(_editor)
       var _session = _editor.getSession();
       var _renderer = _editor.renderer;

       // Options
       _session.setUndoManager(new ace.UndoManager());

       // Events
       _editor.on("changeSession", function(){ 
         
       });
       _session.on("change", function(){
        console.log(this)
         $('.preview').html(_editor.session.getValue());
       });
     };
    restService.getElement().then(function(element){
      $scope.element = element;
    });
  });

  angular.module('ngApp')
    .controller('NewHtmlCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.processForm = function() {
    $http({
        method  : 'POST',
        url   : '/elements',
        data  : $.param($scope.formData),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      })
        .success(function(data) {
          console.log(data);

          if (!data.success) {
          // if not successful, bind errors to error variables
            $scope.errorName = data.errors.name;
            $scope.errorSuperhero = data.errors.superheroAlias;
          } else {
          // if successful, bind success message to message
            $scope.message = data.message;
          }
        });
    };
  });