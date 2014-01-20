'use strict';

/* Controllers */

var cmsControllers = angular.module('cmsControllers', []);

cmsControllers.controller('PostListCtrl', ['$scope','PostFactory','$location',
  function($scope, PostFactory, $location) {
    PostFactory.query({}, function (data) {
      $scope.posts = data;
    });
    $scope.orderProp = 'age';
    $scope.options = ['Published','Draft','Pending Review'];
    
    $scope.editPost = function (postId) {
      $location.path('/post/' + postId);
    };

     /* callback for ng-click 'createPost': */
    $scope.createPost = function () {
      $location.path('/post/create');
    };
}]);

cmsControllers.controller('PostDetailCtrl', ['$scope', '$routeParams', 'PostFactory', '$location',
  function($scope, $routeParams, PostFactory, $location) {
    $scope.post = PostFactory.view({id: $routeParams.postId});
    $scope.options = ['Published','Draft','Pending Review'];

     /* callback for ng-click 'updatePost': */
    $scope.updatePost = function () {
      PostFactory.update($scope.post);
      $location.path('/posts');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/posts');
    };
}]);

app.controller('PostCreateCtrl', ['$scope', 'PostFactory', '$location',
  function ($scope, PostFactory, $location) {

    /* callback for ng-click 'createPost': */
    $scope.createPost = function () {
      PostFactory.create($scope.post);
      $location.path('/posts');
    }
}]);
