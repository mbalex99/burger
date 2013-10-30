var mysql = require('mysql');

exports.connection = function(){
    return mysql.createConnection("mysql://b04d97151df013:23c3e27c@us-cdbr-azure-east-c.cloudapp.net/burger");
};