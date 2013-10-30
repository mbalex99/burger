 var express = require('express');
 var http = require('http');
 var path = require('path');
 var routeConfig = require('./configs/routeConfig');

 var app = express();

app.configure(function(){
// all environments
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.set('views', __dirname);
    app.set('view engine', 'ejs');
    app.set('view options', {layout:false});
    app.engine('html', require('ejs').renderFile);
    app.use('/', express.static(path.join(__dirname)));
    app.use('/partials', express.static(path.join(__dirname, 'scripts')));
    app.use('/assets', express.static(path.join(__dirname, 'assets')));
    app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
});


// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

routeConfig.run(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
