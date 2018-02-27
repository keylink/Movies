

movieApp.controller('ViewMovie', function($scope) {
  $scope.data = '';
  $scope.data = JSON.parse(localStorage.getItem('movie'));
  console.log("viewMovie", $scope.data);
});