  /**
   * Http requests service.
   */

  movieApp.factory('httpService', function($http) {

    return {
      initDataRequest: function() {
        return $http({
          url: 'https://www.omdbapi.com/?t=avengers&apikey=42cb07cf',
          method: "GET",
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
      },
      searchMovieRequest: function(movie) {
        return $http({
          url: 'https://www.omdbapi.com/?t=' + movie + '&apikey=42cb07cf',
          method: "GET",
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
      }
    }
  });