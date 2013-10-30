var countryRepository = require('../dataAccess/countryRepository');



var countriesController = {
    getCountries: function(req, res){
        countryRepository.getCountries().then(function(result){
            res.send(result);
        }, function(err){
            res.send(err);
        });

    }
};

module.exports = countriesController;