Application.Controllers.controller('DevicesCtrl', ['$scope', 'deviceService', function($scope, deviceService){


    $scope.switchFocusedDevice = function(device){
        $scope.focusedDevice = device;
    };

    $scope.fetch = function(){
        deviceService.getDevices().then(function(response){
            $scope.devices = response;
            $scope.switchFocusedDevice(response[0]);
        }, function(error){
            alert(error);
        });
    };

    $scope.fetch();
}]);