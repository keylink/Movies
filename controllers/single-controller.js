

movieApp.controller('ViewMovie', function($scope) {
  $scope.data = JSON.parse(localStorage.getItem('movie'));
});