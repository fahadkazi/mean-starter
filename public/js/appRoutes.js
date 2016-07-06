// public/js/appRoutes.js
angular.module('meanStarterApp').config(function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        });

    $locationProvider.html5Mode(true);

});