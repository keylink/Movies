

movieApp.controller('MovieController', function($scope, $http, $routeParams, httpService) {

  $scope.data = JSON.parse(localStorage.getItem('movie'));
  $scope.url = 'https://www.youtube.com/results?search_query=avengers';

  //Init angular lifecycle for load start data
  $scope.init = function () {
    if($scope.data == undefined) {
      httpService.initDataRequest()  // Service http request
        .then(function(response) {
          $scope.data = response.data;
          $routeParams.test = response.data;
          localStorage.setItem('movie', JSON.stringify(response.data));
        },
        function(err) {
          console.log("initDataRequest err", err); // failed
        });
    }
  };


  $scope.search = function() {

    if($scope.searchName) {

      httpService.searchMovieRequest($scope.searchName)
        .then(function(response) {
          // success pass data to global variable
          $scope.data = response.data;
          $routeParams.test = response.data;
          localStorage.setItem('movie', JSON.stringify(response.data));
        },
        function(err) {
          console.log("getNews err", err); // failed
        });
    }
  };

  // Handling Enter event
  $scope.myFunct = function(keyEvent) {
    if (keyEvent.which === 13)
      $scope.search();
  };

});