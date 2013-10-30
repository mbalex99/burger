Application.Controllers.controller('TestersCtrl', ['$scope', 'testerService', function($scope, testerService){


    $scope.switchFocusedTester = function(tester){
        $scope.focusedTester = tester;
    };

    $scope.fetch = function(){
        testerService.getTesters().then(function(response){
            $scope.testers = response;
            $scope.focusedTester = response[0];
        }, function(error){
            alert(error);
        });
    };

    $scope.fetch();
}]);