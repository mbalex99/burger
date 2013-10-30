Application.Controllers.controller('BugsCtrl', ['$scope', 'bugService',  function($scope, bugService){

    $scope.fetch = function(){
        bugService.getBugs().then(function(bugs){
            $scope.bugs = bugs;
        });
    };

    $scope.fetch();
}]);