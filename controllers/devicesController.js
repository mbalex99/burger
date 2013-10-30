//var database = require('../configs/database');
//var mysql = require('mysql');
var deviceRepository = require('../dataAccess/deviceRepository');

var devicesController = {
    getDevices: function(req, res){

        deviceRepository.getDevices().then(function(result){
            res.send(result);
        }, function(err){
            res.send(err);
        });

    },
    getDeviceById: function(req, res){
        deviceRepository.getDeviceById(req.params.deviceId).then(function(result){
            res.send(result);
        }, function(err){
            res.send(err);
        });
    }
};

module.exports = devicesController;