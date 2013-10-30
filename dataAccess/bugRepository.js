var mysql = require('mysql');
var q = require('q');
var burgerDatabase = require('./burgerDatabase');


exports.getBugs = function(){
    var deferred = q.defer();
    var connection = burgerDatabase.connection();
    connection.connect();

    //NO JOINS! Angular-JS does not like large arrays. This has about 1000 entries, so we're going to have to give the client the reigns to do deeper querying.

    connection.query("SELECT * FROM bugs", function(err, results){
        if(err){
            deferred.reject(err);
        }else
        {
            deferred.resolve(results);
        }
        connection.end();
    });
    return deferred.promise;
};
