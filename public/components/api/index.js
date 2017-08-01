import angular from 'angular';
import Api from './api.service';

angular
    .module('api', [])
    .service('Api', ['$rootScope', Api]);

export default 'api';
