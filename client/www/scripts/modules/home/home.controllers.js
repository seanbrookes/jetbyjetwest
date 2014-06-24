/**
 * Created by seanbrookes on 2014-01-28.
 */
Home.controller('HomeController', [
  '$scope',
  '$http',
  function ($scope, $http) {

    console.log('home controller');


//    $scope.myData = [];


    var responsePromise = $http.get('./scripts/modules/home/jonboat.json');

    responsePromise.success(function(data, status, headers, config) {
      $scope.myData = data;
      $scope.gridOptions = { data: 'myData' };
    });
    responsePromise.error(function(data, status, headers, config) {
      console.log("AJAX failed!");
    });


  }
]);
