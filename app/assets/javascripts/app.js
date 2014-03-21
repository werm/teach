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
      .when('/html/new', {
        templateUrl: 'assets/templates/new_html.html',
        controller: 'NewHtmlCtrl'
      })
      .when('/html/:id', {
        templateUrl: 'assets/templates/show_html.html',
        controller: 'ShowHtmlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })