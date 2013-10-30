Application.Controllers.controller('DashboardCtrl', ['$scope','deviceService', 'testerService', '$q', function($scope, deviceService, testerService, $q){
    $scope.message = "Hey from Angular";

    $scope.fetch = function(){
        var devicePromise = deviceService.getDevices();
        var testerPromise = testerService.getTesters();

        var promiseArray = [devicePromise, testerPromise];

        $q.all(promiseArray).then(function(responseArray){
            $scope.devices = responseArray[0];
            $scope.testers= responseArray[1];
        });
    }

    $scope.fetch();
}]);