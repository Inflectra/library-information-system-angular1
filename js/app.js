/* global angular */
/* global permissions */


var app = angular.module('myApp', ['ui.router', 'ui.grid', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.cellNav', 'ui.grid.saveState']);

app.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state("home", {
        url : "/home",
        templateUrl : "views/home.html",
        controller : "homeCtrl"
    })
    .state("books", {
        url : "/books",
        templateUrl : "views/books.html",
        controller : "booksCtrl"
    })
    .state("authors", {
        url : "/authors",
        templateUrl : "views/authors.html",
        controller : "authorsCtrl"
    })
    .state("login", {
        controller : "loginCtrl"
    })
    .state("nav", {
        templateUrl : "views/nav.html",
        controller : "navCtrl"
    });
})

.run(['$rootScope', '$state', function($rootScope, $state) {
 $rootScope.loggedIn = false;
   $rootScope.$on('$stateChangeStart', function(e, to) {
  
       if ($rootScope.loggedIn == false && to.name != 'home') {
       e.preventDefault();
       alert('Please log in.')
     }
 
    });
 
 }]);

