'use strict';

angular.module('ngApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.ace'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/templates/main.html',
        controller: 'MainCtrl'
      })
      .when('/html', {
        templateUrl: 'assets/templates/html.html',
        controller: 'HtmlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })