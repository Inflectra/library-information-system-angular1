/* global app */
/* global angular */

app.controller('authorsCtrl', ['$scope', 'authorService', 'enableEditService', 'bookService', function($scope, authorService, enableEditService, bookService, $index) {
  
  $scope.include = function(obj) {
     authorService.updateAuthors(obj);
   };
   
  $scope.temp = authorService.authorsList;
  $scope.authorErrorMessage = "";
  
  $scope.edit = enableEditService.edit;
    console.log($scope.edit);

  
  $scope.gridOptions = {
    
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
       { field: 'name', displayName: 'Name', enableHiding: false, cellEditableCondition: $scope.edit
       },
       { field: 'age', displayName: 'Age', enableHiding: false, cellEditableCondition: $scope.edit
       }
    ]
  };
  
  $scope.addNewItem = function() {
    var n = $scope.temp.length + 1;
    $scope.temp.push( { id: n, name: 'New Author', age: 0});
    console.log($scope.temp);
    };
    
    $scope.selected = $scope.temp[0];
    
    // // loop through the bookslist
    // for(var b = 0; b < bookService.booksList; b++){
    // // if the author has a book associated with them, they cannot be deleted
    //   if(bookService.booksList[b])
    // }
  
}]);

