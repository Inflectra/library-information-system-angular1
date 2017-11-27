/* global app */
app.controller('authorsCtrl', function($scope) {

$scope.authorsList = [
  {
    id: 1, 
    name: "Ian McEwan", 
    age: 42
  },
  {
    id: 2, 
    name: "Charles Dickens", 
    age: 105
  },
  {
    id: 3, 
    name: "Arthur Conan Doyle", 
    age: 125
  },
  {
    id: 4, 
    name: "Agatha Christie", 
    age: 98
  }
];

});