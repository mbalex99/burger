var testerRepository = require('../dataAccess/testerRepository');


var testersController = {
    getTesters: function(req, res){

        var params = {};

        if(req.query.country){
            params.countryCodes = req.query.country instanceof Array ? req.query.country : [req.query.country];
        }

        if(req.query.deviceId){
            params.deviceIds = req.query.deviceId instanceof  Array? req.query.deviceId : [req.query.deviceId];
        }

        testerRepository.getTesters(params).then(function(result){
            res.send(result);
        }, function(err){
            res.send(err);
        });

    },
    getTesterById: function(req, res){
        testerRepository.getTesterById(req.params.testerId).then(function(tester){
            res.send(tester);
        }, function(err){
            res.send(err);
        });
    }
};

module.exports = testersController;