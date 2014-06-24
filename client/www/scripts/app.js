/**
 * Created by seanbrookes on 2014-01-28.
 */
var app = angular.module('app', [
  'ui.router',
  'Post',
  'Home',
  'ngGrid'
]);
app.run([
  '$http',
  '$templateCache',
  function ($http, $templateCache) {


  }
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: './scripts/modules/home/templates/home.template.html'
      }).
      state('posts', {
        url: '/posts',
        controller: 'PostMainController',
        templateUrl: './scripts/modules/post/templates/post.main.html'
      });


  }
]);

