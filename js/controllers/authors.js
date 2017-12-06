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


$scope.gridOptions = {
  data: 'authorsList',
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


    
});

