'use strict';

angular
  .module('projectIdAppApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider, $logProvider) {


    $logProvider.debugEnabled(true);
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/newUser', {
        templateUrl: 'views/newUser.html',
        controller: 'NewUserCtrl',
        controllerAs: 'newUser'
      })
      .when('/allUsers', {
        templateUrl: 'views/allUsers.html',
        controller: 'AllUsersCtrl',
        controllerAs: 'allUsers'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
