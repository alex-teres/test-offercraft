import angular from 'angular';
import HomeCtrl from './home.controller';
import homeView from './home.html';
import Home from './home.service';
import './home.styl';

const NAME = 'home';

    function homeDirective() {
        return {
            restrict: 'E',
            scope: {},
            template: homeView,
            controller: 'homeCtrl as vm',
            bindToController: true
        };
    }
    angular
        .module(NAME, [])
        .controller('homeCtrl', ['$scope', 'Home','$state', HomeCtrl])
        .directive('home', homeDirective)
        .service('Home', ['$state', Home])
        .config(function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    template: '<home></home>'
                })
        });

export default NAME;