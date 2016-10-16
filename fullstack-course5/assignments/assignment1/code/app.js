(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.Message = "";
    $scope.TextInput = "";

    $scope.ShowMessage = function () {
      var inputList = $scope.TextInput.split(',');

      if ($scope.TextInput == "") {  //work on this to include checks for spaces , ,
          $scope.Message = "Please enter data first!";
      }
      else if (inputList.length <= 3) {
        $scope.Message = "Enjoy!";
      }
      else {
        $scope.Message = "Too much!";
      }
    };
  }
})();
