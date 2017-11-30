/* global angular */

var loginService = angular.module('loginService', [])
.service('Login', function ($scope) {
    
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

$scope.currentUser = [];
$scope.currentUserName = $scope.currentUser.name;

$scope.loginMatch = function() {
    for(var i = 0; i < $scope.users.length; i++) {
        
 if ($scope.usernameinput == $scope.users[i].username) {
  if ($scope.passwordinput == $scope.users[i].password) {
    $scope.currentUser.push($scope.users[i]);
    alert($scope.users[i].name + " is logged in");
    console.log($scope.currentUser);
    $scope.loggedIn = true;
    return;

  } else {
    alert("Login attempt not successful. Please try again.");
    $scope.loginForm.$setUntouched();
    $scope.loginForm.$setPristine();
    $scope.currentUser = [];
    return;
  }
} 
} 

if ($scope.usernameinput != $scope.users.username) {
    alert("User does not exist.");
    $scope.loginForm.$setUntouched();
    $scope.loginForm.$setPristine();
    $scope.currentUser = [];
  }
};

}); 
