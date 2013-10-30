var database = require('../configs/database');


var bugsController = {
    getBugs: function(req, res){
        database.getBugs(function(err, results){
            if(err) {res.send(500); return;}
            res.send(results);
        });

    },
    getBugsById: function(req, res){
        res.send({
            test: 'test'
        });
    }
};

module.exports = bugsController;