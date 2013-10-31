Application.Services.factory('deviceService', ['$http', '$q', function($http, $q){

    var getDevices = function(){
        var deferred = $q.defer();

        $http.get('/api/devices').success(function(response){
            deferred.resolve(response);
        }).error(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    var getDeviceById = function(deviceId){
        var deferred = $q.defer();

        $http.get('/api/devices/' + deviceId).success(function(response){
            deferred.resolve(response);
        }).error(function(error){
                deferred.reject(error);
            });

        return deferred.promise;
    }

    return {
        getDevices: getDevices,
        getDeviceById: getDeviceById
    };
}]);