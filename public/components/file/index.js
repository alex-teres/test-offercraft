import angular from 'angular';
import FileCtrl from './file.controller';
import fileView from './file.html';
import './file.styl';

const NAME = 'file';

function fileDirective() {
    return {
        restrict: 'E',
        scope: {},
        template: fileView,
        controller: 'fileCtrl as vm',
        bindToController: true
    };
}
angular
    .module(NAME, [])
    .controller('fileCtrl', ['$element','$http','$scope', FileCtrl])
    .directive('file', fileDirective)
    .config(function ($stateProvider) {
        $stateProvider
            .state('file', {
                url: '/file',
                template: '<file></file>'
            })
    });

export default NAME;$