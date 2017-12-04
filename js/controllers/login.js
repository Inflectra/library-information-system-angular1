/* global app */
app.controller('loginCtrl', function($scope, $rootScope, $location) {
console.log($rootScope);

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
$scope.logInName = "";
//$scope.currentUser = [];




$scope.loginMatch = function() {
    for(var i = 0; i < $scope.users.length; i++) {
        
         if ($scope.usernameinput == $scope.users[i].username) {
          if ($scope.passwordinput == $scope.users[i].password) {
            //if it is a match, do all these things  
           // $scope.currentUser.push($scope.users[i]);
            alert($scope.users[i].name + " is logged in");
           $scope.loggedIn = true;
            $scope.logInName = $scope.users[i].name;
            $scope.errorMessage = "";
           // $location.path('books');
            $rootScope.loggedIn = true;
            return;
        
          } else {
         //   alert("Login attempt not successful. Please try again.");
            $scope.errorMessage = "Login attempt not successful. Please try again.";
            $scope.loginForm.$setUntouched();
            $scope.loginForm.$setPristine();
            $scope.currentUser = [];
            return;
          }
        } 
     } 

if ($scope.usernameinput != $scope.users.username) {
   // alert("User does not exist.");
    $scope.errorMessage = "User does not exist";
    $scope.loginForm.$setUntouched();
    $scope.loginForm.$setPristine();
    $scope.currentUser = [];
  }
}; 

// $scope.logout = function(){
//   window.location.reload();
// };


}); 