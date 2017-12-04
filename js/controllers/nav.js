/* global app */
app.controller('navCtrl', function($scope, $rootScope, $location) {

$scope.logOut = function(){
   $rootScope.loggedIn = false;
   $location.path('home');
 }


});