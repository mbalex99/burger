var mysql = require('mysql');
var q = require('q');
var burgerDatabase = require('./burgerDatabase');

exports.getTesters = function(params){
    var deferred = q.defer();
    var connection = burgerDatabase.connection();
    connection.connect();

    var selectionSql = "SELECT tester.testerId, tester.firstName, tester.lastName, tester.country, tester.lastLogin, tester.pictureUrl, count(bug.bugId) bugCount FROM Testers tester INNER JOIN Bugs bug ON bug.testerId = tester.testerId ";


    var whereClause = "";

    if(params.countryCodes || params.deviceIds){
        whereClause += "WHERE ";
    }

    if(params.countryCodes){
        whereClause += "tester.Country IN (" + connection.escape(params.countryCodes) + ") ";
    }

    if(params.countryCodes && params.deviceIds){
        whereClause += "AND ";
    }

    if(params.deviceIds){
        whereClause += "bug.deviceId IN (" + connection.escape(params.deviceIds) + ") ";
    }

    var groupClause = "GROUP BY tester.testerId ORDER BY COUNT(bug.bugId) DESC";
    var sql = selectionSql + whereClause + groupClause;


    connection.query(sql, function(err, result){
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

exports.getTesterById = function(testerId){
    var deferred = q.defer();
    var connection = burgerDatabase.connection();
    connection.connect();
    connection.query("SELECT * FROM testers WHERE testerId = ?", testerId, function(err, result){
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