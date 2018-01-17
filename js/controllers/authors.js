/* global app */
/* global angular */

app.controller('authorsCtrl', ['$scope', 'authorService', 'enableEditService', function($scope, authorService, enableEditService, $index) {
  
  $scope.include = function(obj) {
     authorService.updateAuthors(obj);
   };
   
  $scope.authorData = authorService.authorsList;
  $scope.authorErrorMessage = "";
  
  //true or false depending on who is logged in - allows certain cells to be editable via cellEditableCondition in columnDefs
  $scope.edit = enableEditService.edit;
  
  //author grid setup
  $scope.gridOptions = {
    
    data: 'authorData',
    enableCellSelection: true,
    enableCellEdit: true,
    enableCellEditOnFocus: true,
    enableColumnMenus: false,
    enableSorting: false,
    rowEditWaitInterval: -1, //stops default save behavior
    saveFocus: false,
    saveScroll: true,
    saveGroupingExpandedStates: true,
    enableRowSelection: false,
    enableRowHeaderSelection: false,
    onRegisterApi: function (gridApi) {
                   $scope.gridApi = gridApi;
                   },
  
    columnDefs: [
       { field: 'id', displayName: 'ID', enableCellEdit: false, enableHiding: false
       },
       { field: 'name', displayName: 'Name', enableHiding: false, cellEditableCondition: $scope.edit
       },
       { field: 'age', displayName: 'Age', enableHiding: false, cellEditableCondition: $scope.edit
       }
    ]
  };
  
  //saving in the new author modal
  $scope.addNewItem = function() {
    var n = $scope.authorData.length + 1;
    $scope.authorData.push( { id: n, name: $scope.newAuthorName, age: $scope.newAuthorAge});
    modal.css('display', 'none');
    };
    
   // get the modal
    var modal = angular.element( document.querySelector( '#authorModalBody' ) );

    // when the user clicks on the create new author button, open the modal 
    $scope.openModal = function() {
        modal.css('display', 'block');
    };
    
    //clicking cancel once modal is open, or closing the modal after saving
    $scope.closeModal = function() {
        modal.css('display', 'none');
    };
    
}]);

