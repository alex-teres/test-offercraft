import 'jquery';
import 'jquery-ui';
import angular from'angular';
import uiRouter from 'angular-ui-router';
import home from './components/home';
import '../node_modules/bootstrap/less/bootstrap.less';
import 'bootstrap';

angular
    .module('myApp', [
        uiRouter,
        home,
        ])
    .directive('app', function () {
        return {
            restrict: 'E',
            template: '<ui-view></ui-view>'
        }
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
    })
    .service('userInterceptor', function () {
        var service = this;

        service.request = function (config) {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = localStorage.getItem('Authorization');
            }
            return config;
        };
    })
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('userInterceptor');
}]);