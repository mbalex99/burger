var devicesController = require('../controllers/devicesController');
var testersController = require('../controllers/testersController');
var countriesController = require('../controllers/countriesController');
var bugsController = require('../controllers/bugsController');
var homeController = require('../controllers/homeController');


module.exports = {
	run: function(app){
		app.get('/', homeController.index);
        app.get('/api/devices', devicesController.getDevices);
        app.get('/api/devices/:deviceId', devicesController.getDeviceById);
        app.get('/api/testers', testersController.getTesters);
        app.get('/api/testers/:testerId', testersController.getTesterById);
        app.get('/api/countries', countriesController.getCountries);
        app.get('/api/bugs', bugsController.getBugs);
	}
};