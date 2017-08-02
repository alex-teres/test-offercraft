import angular from 'angular';
import MainTableCtrl from './mainTable.controller';
import mainTableView from './mainTable.html';
import MainTable from './mainTable.service';
import './mainTable.styl';

const NAME = 'mainTable';

    function mainTableDirective() {
        return {
            restrict: 'E',
            scope: {},
            template: mainTableView,
            controller: 'mainTableCtrl as vm',
            bindToController: true
        };
    }
    angular
        .module(NAME, [])
        .controller('mainTableCtrl', ['MainTable','$state','$scope', MainTableCtrl])
        .directive('mainTable', mainTableDirective)
        .service('MainTable', ['$state','$http','$q', MainTable])
        .config(function ($stateProvider) {
            $stateProvider
                .state('mainTable', {
                    url: '/mainTable',
                    template: '<main-table></main-table>'
                })
        });

export default NAME;