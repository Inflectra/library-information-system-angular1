/* global app */
app.controller('loginCtrl', function($scope, $rootScope, $location, $state, enableEditService) {

$scope.users=[
    {
        id: 1, 
        username: "librarian", 
        password: "librarian", 
        name: "Librarian", 
        active: true,
        permission: 1
    },
    {
        id: 2, 
        username: "visitor", 
        password: "visitor", 
        name: "Wally West", 
        active: true,
        permission: 2
    },
    {
        id: 3, 
        username: "member", 
        password: "member", 
        name: "Clark Kent", 
        active: true,
        permission: 2
    },
    {
        id: 4, 
        username: "banned", 
        password: "banned", 
        name: "Evil Doer", 
        active: false,
        permission: 2
    },
    {
        id: 5, 
        username: "admin", 
        password: "admin", 
        name: "administrator", 
        active: true,
        permission: 1
    }
];

$scope.logInMessage = "";
$scope.errorMessage = "";
$rootScope.logInId = "";
$rootScope.logInPermission = "";
$rootScope.logInActive = "";

$scope.loginMatch = function() {
    for(var i = 0; i < $scope.users.length; i++) {
        
         if ($scope.usernameinput == $scope.users[i].username) {
          if ($scope.passwordinput == $scope.users[i].password) {
           if ($scope.users[i].active == true) {
            //if it is a match and the user is active, do all these things  
            $rootScope.logInId = $scope.users[i].id;
            $rootScope.logInName = $scope.users[i].name;
            $rootScope.logInPermission = $scope.users[i].permission;
            $rootScope.logInActive = $scope.users[i].active;
            $scope.errorMessage = "";
           // $location.path('books');
            $rootScope.loggedIn = true;
            
            //permissions
            if($rootScope.logInPermission == 1){ //librarian and admin
                 enableEditService.edit = true;
             }
             else { //everyone else
                 enableEditService.edit = false;
             }
            }
            //banned
            $scope.errorMessage = "Sorry, this user is no longer active.";
            $scope.loginForm.$setUntouched();
            $scope.loginForm.$setPristine();
            return;
         
          } else {
            $scope.errorMessage = "Login attempt not successful. Please try again.";
            $scope.loginForm.$setUntouched();
            $scope.loginForm.$setPristine();
            return;
          }
        } 
        
        if ($scope.usernameinput != $scope.users[i].username) {
            $scope.errorMessage = "User does not exist.";
            $scope.loginForm.$setUntouched();
            $scope.loginForm.$setPristine();
            }
  
    } 

    if(!$scope.usernameinput){
        if(!$scope.passwordinput){
            $scope.errorMessage = "Please provide login details."; 
        }
        else {
             $scope.errorMessage = "Please enter a username.";
        }
    } else if(!$scope.passwordinput){
        $scope.errorMessage = "Please enter a password.";
    }
  
}; 

}); 