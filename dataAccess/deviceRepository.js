var mysql = require('mysql');
var q = require('q');
var burgerDatabase = require('./burgerDatabase');

exports.getDevices = function(){
    var deferred = q.defer();
    var connection = burgerDatabase.connection();
    connection.connect();
    connection.query("SELECT * FROM devices", function(err, result){
        if(err){
            deferred.reject(err);
        }else
        {
            deferred.resolve(result);
        }
        connection.end();
    });
    return deferred.promise;
};

exports.getDeviceById = function(deviceId){
    var deferred = q.defer();
    var connection = burgerDatabase.connection();
    connection.connect();
    connection.query("SELECT * FROM devices WHERE deviceId = ?", deviceId, function(err, result){
        if(err){
            deferred.reject(err);
        }else
        {
            deferred.resolve(result[0]);
        }
        connection.end();
    });
    return deferred.promise;
}