// Main module
angular.module('app', ['ui.router', 'appControllers'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'mainController',
        controllerAs: 'main'
      })    
  })
  