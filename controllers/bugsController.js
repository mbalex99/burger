var bugRepository = require('../dataAccess/bugRepository');


var bugsController = {
    getBugs: function(req, res){
        bugRepository.getBugs().then(function(result){
            res.send(result);
        }, function(err){
            res.send(err);
        });
    },
    getBugsById: function(req, res){
        res.send({
            test: 'test'
        });
    }
};

module.exports = bugsController;