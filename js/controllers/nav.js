/* global app */
app.controller('navCtrl', function($scope, $rootScope, $location, $state) {

$scope.logOut = function(){
   $rootScope.loggedIn = false;
   $location.path('home');
   $state.reload();
 }


});