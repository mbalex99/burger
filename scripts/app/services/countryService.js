Application.Services.factory('countryService', ['$http', '$q', function($http, $q){

    var getCountries = function(){
        var deferred = $q.defer();

        $http.get('/api/countries').success(function(response){
            deferred.resolve(response);
        }).error(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getCountries: getCountries
    };
}]);