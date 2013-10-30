var mysql = require('mysql');
var q = require('q');


var pool = mysql.createPool({
    host: "us-cdbr-azure-east-c.cloudapp.net",
    user: "b04d97151df013",
    password: "23c3e27c",
    database: "burger",
    connectionLimit: 3,
    supportBigNumbers: true,
    waitForConnections: true
});

var getConnection = function(){
    var deferred = q.defer();
    pool.getConnection(function(err, connection){
        if(err){
            deferred.reject(err);
        }

        if(connection){
            deferred.resolve(connection);
        }

    });
    return deferred.promise;
}

//REPOSITORY METHODS
exports.getDevices = function (callback) {

    var sql = "SELECT * FROM Devices";

    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function (err, results) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
    });

};

exports.getDeviceById = function (deviceId, callback) {

    var sql = "SELECT * FROM Devices WHERE DeviceId = " +  connection.escape(deviceId);

    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function (err, results) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
    });

};

exports.getTesters = function (params, callback) {


    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }

        var selectionSql = "SELECT tester.testerId, tester.firstName, tester.lastName, tester.country, tester.lastLogin, count(bug.bugId) bugCount FROM Testers tester INNER JOIN Bugs bug ON bug.testerId = tester.testerId ";


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


        // make the query
        connection.query(sql, function (err, results) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
            connection.release()
        });
    });
};

exports.getTesterById = function (testerId, callback) {
    var sql = "SELECT * FROM testers WHERE testerId = ?";
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [testerId], function (err, results) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
            connection.release()
        });
    });
};

exports.getCountries = function(callback){
    var sql = "SELECT Distinct(country) FROM Testers";
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function (err, results) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
            connection.release()
        });
    });
}

exports.getBugs = function(callback){
    var sql = "SELECT * FROM Bugs b JOIN Devices d ON b.deviceId = d.deviceId";

    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function (err, results) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
    });
}