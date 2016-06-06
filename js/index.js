var myApp = angular.module('myApp', []);

myApp.controller('NetflixController', ['$scope', '$http', function($scope, $http) {
  $scope.get = function(value) {
    if ($scope.title) {
      var promise = $http.get('http://netflixroulette.net/api/api.php?title=' + $scope.title);

           promise.then(function(response) {
            $scope.TitleInfo =  $('#info__title').html(response.data.show_title);
                                $('#info__category').html('<span class="strong">Category:</span> '+response.data.category);
                                $('#info__directory').html('<span class="strong">Directory: </span>'+response.data.directory);
                                $("#info__poster").attr("src",response.data.poster);
                                $('#info__year').html('<span class="strong">Year: </span>'+response.data.release_year);
                                $('#info__time').html('<span class="strong">Time:</span>'+response.data.runtime);
                                 $('#info__summary').html('<span class="strong">Summary:</span>' +response.data.summary);

                             },

       function(error) {
        $scope.TitleInfo = "Error: " + error.data.message;
      });
    }
  };
}]);
