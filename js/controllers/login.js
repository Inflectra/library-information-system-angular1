/* global app */
app.controller('loginCtrl', function($scope, $rootScope, $location, $state) {

$scope.users=[
    {
        id: 1, 
        username: "librarian", 
        password: "librarian", 
        name: "Librarian", 
        active: true
    },
    {
        id: 2, 
        username: "visitor", 
        password: "visitor", 
        name: "Wally West", 
        active: true
    },
    {
        id: 3, 
        username: "member", 
        password: "member", 
        name: "Clark Kent", 
        active: true
    },
    {
        id: 4, 
        username: "banned", 
        password: "banned", 
        name: "Evil Doer", 
        active: false
    },
    {
        id: 5, 
        username: "admin", 
        password: "admin", 
        name: "administrator", 
        active: true
    }
];

$scope.logInMessage = "";
$scope.loggedIn = false;
$scope.errorMessage = "";
$rootScope.logInName = "";




$scope.loginMatch = function() {
    for(var i = 0; i < $scope.users.length; i++) {
        
         if ($scope.usernameinput == $scope.users[i].username) {
          if ($scope.passwordinput == $scope.users[i].password) {
            //if it is a match, do all these things  
            alert($scope.users[i].name + " is logged in");
            $rootScope.logInName = $scope.users[i].name;
            $scope.loggedIn = true;
            $scope.errorMessage = "";
           // $location.path('books');
            $rootScope.loggedIn = true;
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

//if a field is empty when submitted, error message
if(!$scope.usernameinput){
   $scope.errorMessage = "Please enter a username."; 
}

if(!$scope.passwordinput){
   $scope.errorMessage = "Please enter a password."; 
}
  
}; 



}); 