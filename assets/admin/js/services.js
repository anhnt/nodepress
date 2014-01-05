'use strict';

var services = angular.module('cmsServices', ['ngResource']);

services.factory('PostFactory', function ($resource) {
    return $resource('/post', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' },
        view: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});