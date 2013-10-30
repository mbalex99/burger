var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);

angular.module('application',
    ['application.constants', 'application.services', 'application.controllers', 'application.filters', 'application.directives', 'ngRoute', 'ngAnimate'])
    .config(['$routeProvider', function($routeProvider){

        $routeProvider
            .when('/', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl'})
            .when('/testers', {templateUrl: 'partials/testers.html', controller: 'TestersCtrl'})
            .when('/bugs', {templateUrl: 'partials/bugs.html', controller: 'BugsCtrl'})
            .when('/devices', {templateUrl: 'partials/devices.html', controller: 'DevicesCtrl'})
            .when('/404', {templateUrl: 'partials/404.html', controller: 'NotFoundCtrl'})
            .otherwise({redirectTo: '/404'});

    }]);