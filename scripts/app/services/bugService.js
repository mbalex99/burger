Application.Services.factory('bugService', ['$http', '$q', function($http, $q){

    var getBugs = function(){
        var deferred = $q.defer();

        $http.get('/api/bugs').success(function(response){
            deferred.resolve(response);
        }).error(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getBugs: getBugs
    };
}]);