/* global app */
/* global angular */
// app.controller('booksCtrl', function($scope) {


// $scope.booksList = [
//   {
//       id: 1, 
//       name: "Hound of the Baskervilles", 
//       author: "Arthur Conan Doyle", 
//       genre: "Murder Mystery", 
//       dateAdded: "1/18/2015", 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 2, 
//       name: "The Scowrers", 
//       author: "Arthur Conan Doyle", 
//       genre: "Murder Mystery", 
//       dateAdded: "1/1/2016" , 
//       outOfPrint: "Yes",
//       active: true
//   },
//   {
//       id: 3, 
//       name: "Amsterdam", 
//       author: "Ian McEwan", 
//       genre: "Contemporary Fiction", 
//       dateAdded: "2/28/2015" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 4, 
//       name: "Saturday", 
//       author: "Ian McEwan", 
//       genre: "Contemporary Fiction", 
//       dateAdded: "2/9/2015" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 5, 
//       name: "The Comfort of Strangers", 
//       author: "Ian McEwan", 
//       genre: "Contemporary Fiction", 
//       dateAdded: "4/15/2016" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 6, 
//       name: "Chesil Beach", 
//       author: "Ian McEwan", 
//       genre: "Contemporary Fiction", 
//       dateAdded: "6/22/2015" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 7, 
//       name: "Atonement", 
//       author: "Ian McEwan", 
//       genre: "Historical Fiction", 
//       dateAdded: "1/17/2016" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 8, 
//       name: "Bleak House", 
//       author: "Charles Dickens", 
//       genre: "Historical Fiction", 
//       dateAdded: "12/13/2015" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 9, 
//       name: "Oliver Twist", 
//       author: "Charles Dickens", 
//       genre: "Historical Fiction", 
//       dateAdded: "4/11/2016" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 10, 
//       name: "Nicholas Nickleby", 
//       author: "Charles Dickens", 
//       genre: "Historical Fiction", 
//       dateAdded: "5/17/2016" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 11, 
//       name: "David Copperfield", 
//       author: "Charles Dickens", 
//       genre: "Historical Fiction", 
//       dateAdded: "1/9/2015" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 12, 
//       name: "The Pickwick Papers", 
//       author: "Charles Dickens", 
//       genre: "Historical Fiction", 
//       dateAdded: "8/1/2015" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 13, 
//       name: "Death on the Nile", 
//       author:  "Agatha Christie", 
//       genre: "Murder Mystery", 
//       dateAdded: "6/2/2016" , 
//       outOfPrint: "No",
//       active: true
//   },
//   {
//       id: 14, 
//       name: "Betrams Hotel", 
//       author:  "Agatha Christie", 
//       genre: "Murder Mystery", 
//       dateAdded: "5/11/2015" , 
//       outOfPrint: "No",
//       active: true
//   }
// ];

app.controller('booksCtrl', ['$scope', 'bookService', function($scope, bookService, $index) {
  
  $scope.include = function(obj) {
     bookService.updateBooks(obj);
   };
   
  $scope.temp = bookService.booksList;
  
  $scope.genreTypes = ['Murder Mystery',
 'Historical Fiction',
 'Contemporary Fiction' 
  ];
  
  
  $scope.bookGridOptions = {
    
    data: 'temp',
    enableCellSelection: true,
    enableCellEdit: true,
    enableCellEditOnFocus: true,
    rowEditWaitInterval: -1,
    saveFocus: false,
    saveScroll: true,
    saveGroupingExpandedStates: true,
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    onRegisterApi: function (gridApi) {
                   $scope.gridApi = gridApi;
                   },
  
    columnDefs: [
       //{ field: 'button', name: '', cellTemplate: '<button class="btn btn-warning ui-grid-cell-contents" ng-click="grid.appScope.deleteRow()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>', width: 29, enableColumnMenu: false, enableCellEdit: false },
       { field: 'id', displayName: 'ID', enableCellEdit: false, enableHiding: false
       },
       { field: 'name', displayName: 'Name', enableHiding: false
       },
       { field: 'author', displayName: 'Author', enableHiding: false
       },
       { field: 'genre', name: 'genre', displayName: 'Genre', enableHiding: false,
         editType: 'dropdown', editableCellTemplate: 'temp.html'
       },
       { field: 'dateAdded', displayName: 'Date Added', enableCellEdit: false, enableHiding: false
       },
       { field: 'outOfPrint', displayName: 'Out of Print?', enableCellEdit: false, enableHiding: false
       },
      // { field: 'active', displayName: 'Active', enableHiding: false
      // }
    ]
  };
  
  // $scope.addNewItem = function() {
  //   var n = $scope.temp.length + 1;
  //   $scope.temp.push( { id: n, name: 'New Author', age: 0});
  //   };



}]);