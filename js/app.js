/* global angular */
/* global permissions */


var app = angular.module("myApp", ["ui.router", "ngCookies"]);

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
});


