Application.Services.factory('testerService', ['$http', '$q', function($http, $q){

    var getTesters = function(){
        var deferred = $q.defer();

        $http.get('/api/testers').success(function(response){
            deferred.resolve(response);
        }).error(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getTesters: getTesters
    };
}]);