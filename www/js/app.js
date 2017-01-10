var myApp = angular.module('main', ['ui.router', 'ngMaterial']);

myApp.config(function($stateProvider) {
    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'templates/about.html'
    }

    var projectsState = {
        name: 'projects',
        url: '/projects',
        templateUrl: 'templates/projects.html'
    }

    $stateProvider.state(projectsState);
    $stateProvider.state(aboutState);


});