/* global app */
/* global angular */

app.controller('authorsCtrl', ['$scope', 'authorService', function($scope, authorService) {
  
  $scope.include = function(obj) {
     authorService.updateAuthors(obj);
   };
   
  $scope.temp = authorService.authorsList;
  
  $scope.orig = angular.copy(authorService.authorsList);
  
  $scope.gridOptions = {
    
    data: 'temp',
    enableCellSelection: true,
    enableCellEdit: true,
    enableCellEditOnFocus: true,
    rowEditWaitInterval: -1,
    saveFocus: false,
    saveScroll: true,
    saveGroupingExpandedStates: true,
    onRegisterApi: function (gridApi) {
                   $scope.gridApi = gridApi;
                   },
  
    columnDefs: [
    // { field: 'button', name: '', cellTemplate: '<button class="btn btn-warning ui-grid-cell-contents" ng-click="grid.appScope.editCell()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>', width: 29, enableColumnMenu: false, enableCellEdit: false },
       { field: 'id', displayName: 'ID', enableCellEdit: false, enableHiding: false,
       },
       { field: 'name', displayName: 'Name', enableHiding: false,
       },
       { field: 'age', displayName: 'Age', enableHiding: false,
       }
    ]
  };
  
  $scope.resetValues = function(){
         $scope.temp = $scope.orig;

  }
  
}]);

