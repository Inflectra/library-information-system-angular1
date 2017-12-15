/* global app */
/* global angular */

app.controller('booksCtrl', ['$scope', 'bookService', 'authorService', function($scope, bookService, authorService, $index) {
  
  $scope.include = function(obj) {
     bookService.updateBooks(obj);
   };
   
  $scope.bookTemp = bookService.booksList;
  
  $scope.genreTypes = [
    {id:"Murder Mystery", value:"Murder Mystery"},
    {id:"Historical Fiction", value:"Historical Fiction"},
    {id:"Contemporary Fiction", value:"Contemporary Fiction"} 
  ];
  
  $scope.bookGridOptions = {
    
    data: 'bookTemp',
    enableCellSelection: true,
    enableCellEdit: true,
    enableCellEditOnFocus: true,
    rowEditWaitInterval: -1,
    saveFocus: false,
    saveScroll: true,
    saveGroupingExpandedStates: true,
    enableRowSelection: true,
    onRegisterApi: function (gridApi) {
                   $scope.gridApi = gridApi;
                   },
  
    columnDefs: [
       //{ field: 'button', name: '', cellTemplate: '<button class="btn btn-warning ui-grid-cell-contents" ng-click="grid.appScope.deleteRow()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>', width: 29, enableColumnMenu: false, enableCellEdit: false },
       { field: 'id', displayName: 'ID', enableCellEdit: false, enableHiding: false
       },
       { field: 'name', displayName: 'Name', enableHiding: false
       },
       { field: 'author', displayName: 'Author', enableHiding: false,
         editableCellTemplate: 'ui-grid/dropdownEditor',
         editDropdownRowEntityOptionsArrayPath: $scope.authorNames
       },
       { field: 'genre', name: 'genre', displayName: 'Genre', enableHiding: false,
         editableCellTemplate: 'ui-grid/dropdownEditor',
         editDropdownOptionsArray: $scope.genreTypes
       },
       { field: 'dateAdded', displayName: 'Date Added', enableCellEdit: false, enableHiding: false
       },
       { field: 'outOfPrint', displayName: 'Out of Print?', enableCellEdit: false, enableHiding: false
       },
      // { field: 'active', displayName: 'Active', enableHiding: false
      // }
    ]
  };
  
//   $scope.booksIds = [];
//       for(var i = 0; i < $scope.bookTemp.length; i++){
//           $scope.booksIds.push($scope.bookTemp[i].author);

//   };
  
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

   $scope.addNewBook = function() {
     var n = $scope.bookTemp.length + 1;
     $scope.bookTemp.push( { id: n, name: 'New Book', author: "", genre: "", dateAdded: date, outOfPrint: "No"  });
     };

  $scope.deleteSelected = function(row) {
    angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
    $scope.bookTemp.splice($scope.bookTemp.lastIndexOf(data), 1);
  });
};


}]);

//http://ui-grid.info/docs/#/api/ui.grid.edit.api:ColumnDef