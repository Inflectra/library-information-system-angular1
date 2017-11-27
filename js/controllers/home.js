/* global app */
app.controller('homeCtrl', function($scope) {

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



$scope.loginMatch = function() {
    for(var i = 0; i < $scope.users.length; i++) {
        if($scope.usernameinput == $scope.users[i].username && $scope.passwordinput == $scope.users[i].password) {
            alert($scope.users[i].name + " is logged in");
        } 
        
        // else if($scope.usernameinput != $scope.users[i].username || $scope.passwordinput != $scope.users[i].password) {
        //       console.log("login info invalid");
        // } 
      
        }         
  
    };

});