/* global app */
/* global angular */
/*global $rootScope*/

app.controller('booksCtrl', ['$scope', '$state', '$stateParams', 'bookService', 'authorService', 'enableEditService', 'uiGridConstants', function($scope, $state, $stateParams, bookService, authorService, enableEditService, uiGridConstants, $index) {
  
  $scope.include = function(obj) {
     bookService.updateBooks(obj);
   };
   
  $scope.authorNameDropdown = authorService.authorsList; 
  $scope.bookTemp = bookService.booksList;

  $scope.genreTypes = [
    {id:"Murder Mystery", value:"Murder Mystery"},
    {id:"Historical Fiction", value:"Historical Fiction"},
    {id:"Contemporary Fiction", value:"Contemporary Fiction"} 
  ];
  
  $scope.genreTypesModal = [
    "Murder Mystery", "Historical Fiction", "Contemporary Fiction" 
  ];
  
  $scope.edit = enableEditService.edit;
  
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
                   $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
                         if(newValue != oldValue){
                            $state.reload();
                         }
                    });
                   },
  
    columnDefs: [

       { field: 'id', displayName: 'ID', enableCellEdit: false, enableHiding: false
       },
       { field: 'name', displayName: 'Name', enableHiding: false, cellEditableCondition: $scope.edit
       },
       { field: 'author', displayName: 'Author', enableHiding: false, cellEditableCondition: $scope.edit,
         cellTemplate: 'tempAuthor.html', 
         editableCellTemplate: 'ui-grid/dropdownEditor',
         editDropdownOptionsArray: authorService.authorsList,
         editDropdownIdLabel: 'id',
         editDropdownValueLabel: 'name' 
       },
       { field: 'genre', name: 'genre', displayName: 'Genre', enableHiding: false, cellEditableCondition: $scope.edit,
         editableCellTemplate: 'ui-grid/dropdownEditor',
         editDropdownOptionsArray: $scope.genreTypes
       },
       { field: 'dateAdded', displayName: 'Date Added', enableCellEdit: false, enableHiding: false
       },
       { field: 'outOfPrint', displayName: 'Out of Print?', enableCellEdit: false, enableHiding: false
       },
    ]
  };
  
$scope.bookAuthorNames = $scope.bookTemp.map(function(book){
     var authorNum = book.author; 
     
     $scope.authorName = authorService.authorsList.filter(function(author){
        return author.id == authorNum; 
    })[0].name;
    
    return $scope.authorName;
 });

$scope.authorNameArray = authorService.authorsList.map(function(author){
    return author.name;
});

var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

  $scope.addNewBook = function() {
     var n = $scope.bookTemp.length + 1;
     $scope.bookTemp.push( { id: n, name: $scope.newTitle, author: $scope.newAuthor, genre: $scope.newGenre, dateAdded: date, outOfPrint: "No" });
     $state.reload();
     $scope.closeModal();
     event.preventDefault();
     };

  $scope.deleteSelected = function(row) {
    angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
    $scope.bookTemp.splice($scope.bookTemp.lastIndexOf(data), 1);
  });
};

var modal = angular.element( document.querySelector( '#bookModalBody' ) );

$scope.openModal = function() {
    modal.css('display', 'block');
};

$scope.closeModal = function() {
    modal.css('display', 'none');
};


}]);