import angular from 'angular';
import ClientCtrl from './client.controller';
import clientView from './client.html';

const NAME = 'client';

function clientDirective() {
    return {
        restrict: 'A',
        scope: { clients: '=' },
        template: clientView,
        controller: 'clientCtrl as vm',
        bindToController: true
    };
}

angular
    .module(NAME, [])
    .controller('clientCtrl', ['$scope', '$state', ClientCtrl])
    .directive('client', clientDirective);

export default NAME;