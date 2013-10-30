Application.Controllers.controller('SidebarCtrl', ['$scope', 'testerService', function($scope, testerService){
    $scope.menuItems = [
        {text: 'Dashboard', href: '#/', iconClass: 'fa fa-dashboard'},
        {text: 'Testers', href: '#/testers', iconClass: 'fa fa-group'},
        {text: 'Devices', href: '#/devices', iconClass: 'fa fa-mobile'},
        {text: 'Bugs', href: '#/bugs', iconClass: 'fa fa-bug'},
    ];

    $scope.bugCount = 1000;

    $scope.fetch = function(){
        testerService.getTesters().then(function(response){
            $scope.testers = response;
            $scope.tester
        }, function(error){
            alert(error);
        });
    }

    $scope.fetch()

}]);