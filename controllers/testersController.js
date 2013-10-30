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
        console.log('Attempting to find a tester with Id'+ req.params.testerId);
        database.getTesterById(req.params.testerId, function(err, results){
            if(err) {res.send(500); return;}

            if(results.length == 1){
                res.send(results[0]);
            }else{
                res.send(results);
            }
        });
    }
};

module.exports = testersController;