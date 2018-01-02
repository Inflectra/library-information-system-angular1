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
  
    $scope.genreTypesModal = [
    "Murder Mystery", "Historical Fiction", "Contemporary Fiction" 
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
         cellTemplate: 'tempAuthor.html', 
         editableCellTemplate: 'ui-grid/dropdownEditor',
         editDropdownOptionsArray: authorService.authorsList,
         editDropdownIdLabel: 'id',
         editDropdownValueLabel: 'name' 
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
  
//map will loop through all the books objects in bookTemp
$scope.bookAuthorNames = $scope.bookTemp.map(function(book){
    //create a variable to store author id of each book in bookTemp
     var authorNum = book.author; 
    //var authorName is a variable to store the result of the following filter
    //filter will look through each object of the authorsList array and return the one that has
    //the object's author id equal to the author id of the books in bookTemp
     $scope.authorName = authorService.authorsList.filter(function(author){
        return author.id == authorNum; 
        //it will return an array of one object from authorsList that matches the criteria but to access that object,
        //you have to choose index [0] because it's the only one in the array
        //then you specify that you want the author name from that same object
    })[0].name;
    //returns the name for the author (in a string) that belongs to that id
    return $scope.authorName;
 })
 //.map will continue to filter and compare through rach book object in bookTemp and always return the name of the
 //author that corresponds with that id - bookAuthorsNames holds the data, so this is a new array of just the author names

//dynamic array of author names
$scope.authorNameArray = authorService.authorsList.map(function(author){
    return author.name;

})
console.log($scope.authorNameArray);

var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

//   $scope.addNewBook = function() {
//      var n = $scope.bookTemp.length + 1;
//      $scope.bookTemp.push( { id: n, name: 'New Book', author: 'Choose Author', genre: 'Choose Genre', dateAdded: date, outOfPrint: "No"  });
//      };

   $scope.addNewBook = function() {
     var n = $scope.bookTemp.length + 1;
     $scope.bookTemp.push( { id: n, name: $scope.newTitle, author: $scope.newAuthor, genre: $scope.newGenre, dateAdded: date, outOfPrint: "No"  });
     modal.css('display', 'none');
     };

  $scope.deleteSelected = function(row) {
    angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
    $scope.bookTemp.splice($scope.bookTemp.lastIndexOf(data), 1);
  });
};

// Get the modal
var modal = angular.element( document.querySelector( '#bookModalBody' ) );

// Get the button that opens the modal

// When the user clicks on the button, open the modal 
$scope.openModal = function() {
    // modal.style.display = "block";
    modal.css('display', 'block');
}

//When the user clicks on <span> (x), close the modal
$scope.closeModal = function() {
    modal.css('display', 'none');
}


}]);

//http://brianhann.com/create-a-modal-row-editor-for-ui-grid-in-minutes/
//https://docs.angularjs.org/api/ng/input/input%5Btext%5D