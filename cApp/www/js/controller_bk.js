angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '基础题', id: 1 },
    { title: '进阶题', id: 2 },
    { title: '强化题', id: 3 },
    { title: '考试题', id: 4 },
    { title: '错   题', id: 5 },
    { title: '收藏题', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


//startFrom & paginationCtrl in order to achieve pagination
.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    return input.slice(start);
  }
})
.controller('paginationCtrl', function($scope){
  $scope.currentPage = 0;
  $scope.itemsPerPage = 1;
  $scope.items = [];
  for(var i=0; i<25; i++){
    $scope.items.push(' 1、若有定义：int a，b，C；以下程序段的输出结果是(   )。a=11；b=3；C=0; pfinff(”％d＼n”，c=(a／b，a％B.)； <br> A.2 B.0C.3D.1 ' 
      + i);
  }
  $scope.firstPage = function() {
    return $scope.currentPage == 0;
  }
  $scope.lastPage = function() {
    var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
    return $scope.currentPage == lastPageNum;
  }
  $scope.numberOfPages = function(){
    return Math.ceil($scope.items.length / $scope.itemsPerPage);
  }
  $scope.startingItem = function() {
    return $scope.currentPage * $scope.itemsPerPage;
  }
  $scope.pageBack = function() {
    $scope.currentPage = $scope.currentPage - 1;
  }
  $scope.pageForward = function() {
    $scope.currentPage = $scope.currentPage + 1;
  }
});