'use strict';

angular.module('ngApp')
  .controller('HtmlCtrl', function ($scope, htmlService) {
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
    htmlService.getElements().then(function(elements){
      $scope.elements = elements;
    });
  });

  // angular.module('editorApp')
  //   .controller('MainCtrl', function ($scope) {
  //     $scope.aceLoaded = function(_editor){
  //       // Editor part
  //       var _session = _editor.getSession();
  //       var _renderer = _editor.renderer;

  //       // Options
  //       _session.setUndoManager(new ace.UndoManager());

  //       // Events
  //       _editor.on("changeSession", function(){ 
  //         console.log("changeSession")
  //       });
  //       _session.on("change", function(){
  //         $('#preview').html(_editor.session.getValue());
  //       });
  //     };
  //     $scope.awesomeThings = [
  //       'HTML5 Boilerplate',
  //       'AngularJS',
  //       'Karma'
  //     ];
  //   });
