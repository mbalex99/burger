Application.Controllers.controller('BugsCtrl', ['$scope', 'bugService', 'testerService', 'deviceService' ,function($scope, bugService, testerService, deviceService){

    $scope.fetch = function(){
        bugService.getBugs().then(function(bugs){
            $scope.bugs = bugs;
        });
    };

    $scope.drillDownBug = function(bug){

        testerService.getTesterById(bug.testerId).then(function(tester){
            $scope.focusedTester = tester;
        });

        deviceService.getDeviceById(bug.deviceId).then(function(device){
            $scope.focusedDevice = device;
        });

    };

    $scope.fetch();
}]);