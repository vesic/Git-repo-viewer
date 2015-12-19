// Main module
angular.module('app', ['ui.router', 'appControllers'])

  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'mainController',
        controllerAs: 'main'
      })    
  })
  