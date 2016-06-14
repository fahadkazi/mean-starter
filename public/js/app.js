// public/js/app.js
var app = angular.module('meanStarterApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'ngMaterial']);

app.controller('NavCtrl', function($scope, $mdSidenav) { 
	$scope.showMobileMainHeader = true;
    $scope.openSideNavPanel = function() {
        $mdSidenav('left').open();
    };
    $scope.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };
});