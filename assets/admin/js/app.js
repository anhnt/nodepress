'use strict';

/* App Module */

var CMS = angular.module('CMS', [
  'ngRoute',
  'ui.tinymce',
  'cmsServices',
  'cmsControllers'
]);

CMS.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/posts', {
        templateUrl: 'views/post/index.html',
        controller: 'PostListCtrl'
      }).
      when('/post/create', {
        templateUrl: 'views/post/create.html',
        controller: 'PostCreateCtrl'
      }).
      when('/post/:postId', {
        templateUrl: 'views/post/edit.html',
        controller: 'PostDetailCtrl'
      }).
      otherwise({
        redirectTo: '/posts'
      });
  }]);