/* global app */
/* global angular */

app.controller('authorsCtrl', ['$scope', 'authorService', 'enableEditService', 'bookService', function($scope, authorService, enableEditService, bookService, $index) {
  
  $scope.include = function(obj) {
     authorService.updateAuthors(obj);
   };
   
  $scope.temp = authorService.authorsList;
  $scope.authorErrorMessage = "";
  
  $scope.edit = enableEditService.edit;
  
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
    $scope.temp.push( { id: n, name: $scope.newAuthorName, age: $scope.newAuthorAge});
    modal.css('display', 'none');
    };
    
    $scope.selected = $scope.temp[0];
    
   
   // Get the modal

    var modal = angular.element( document.querySelector( '#authorModalBody' ) );

    // When the user clicks on the button, open the modal 
    $scope.openModal = function() {
        // modal.style.display = "block";
        modal.css('display', 'block');
    };
    
    //When the user clicks on <span> (x), close the modal
    $scope.closeModal = function() {
        modal.css('display', 'none');
    };

    
    
    
}]);

