angular.module('starter.controllers', [])
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomin = true;
        delete $httpProvider.defaults.headers
            .common['X-Requested-With'];

    })

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

.controller('PlaylistCtrl', function($scope) {})

// 
    /*小课堂控制器*/
    .controller('picCtrl', function($scope) {
        $scope.num = 0;
        $scope.item_num = 1;
        $scope.url = "http://ionicserver.applinzi.com/pics/00.png";
        $scope.pic_num = [
            '11', '12', '14', '15', '16',
            '21', '23', '24', '25', '27', '28', '29',
            '31', '310', '32', '35', '36', '37', '39',
            '41', '42', '43', '44', '46', '47', '48', '49',
            '410', '412', '413', '414', '415', '416', '417', '419',
            '51', '52', '53', '54', '55', '57', '58', '510', '511',
            '61', '62', '64', '65', '66', '67', '68', '69', '611'
        ];
        /*获取图片*/
        $scope.pic_next = function() {
            $scope.url = "http://ionicserver.applinzi.com/pics/"
            $scope.url += $scope.pic_num[$scope.item_num - 1];
            $scope.url += ".png"
            if ($scope.item_num <= 47) {
                $scope.item_num = $scope.item_num + 1;
                return $scope.item_num;
            } else { alert("亲，已经是最后一页咯"); }
        }
        $scope.pic_pre = function() {
            $scope.url = "http://ionicserver.applinzi.com/pics/"
            $scope.url += $scope.pic_num[$scope.item_num - 1];
            $scope.url += ".png"
            if ($scope.item_num != 1) {
                $scope.item_num = $scope.item_num - 1;
                return $scope.item_num;
            } else { alert("亲，已经是第一页咯"); }
        }
    })
    /*选择题的控制器*/

.controller('select', function($scope, $http) {
        $scope.num = 0;
        $scope.item_num = 1;
        /*获取题目*/
        // $scope.onclick = function() {
        $http({
                method: 'POST',
                url: 'http://ionicserver.applinzi.com/select_index.php',
                params: {
                    n: $scope.num
                }
            }).success(function(data, status,
                headers, config) {
                $scope.result = data;
            })
            /*参考答案*/
        $scope.hide = true;
        $scope.lookAnswer = function() {
                $scope.hide = !$scope.hide;
            }
            /*下一题*/
        $scope.item_num_next = function() {
                if ($scope.item_num <= 29) {
                    $scope.item_num = $scope.item_num + 1;
                } else { alert("亲，已经是最后一题了") }
                $scope.hide = true; //隐藏答案
                return $scope.item_num;
            }
            /*上一题*/
        $scope.item_num_pre = function() {
            if ($scope.item_num != 1) {
                $scope.item_num = $scope.item_num - 1;
            } else { alert("亲，已经是第一题了"); }
            $scope.hide = true; //隐藏答案
            return $scope.item_num;
        }
    })
    /*主观题的控制器*/
    .controller('subjective', function($scope, $http) {
        $scope.num2 = 0;
        $scope.item_num2 = 1;
        /*获取题目*/
        // $scope.onclick = function() {
        $http({
                method: 'GET',
                url: 'http://ionicserver.applinzi.com/subjective_index.php',
            })
            .success(function(data, status, headers, config) {
                $scope.result = data;
            })
            /*参考答案*/
        $scope.hide = true;
        $scope.lookAnswer = function() {
                $scope.hide = !$scope.hide;
            }
            /*下一题*/
        $scope.item_num_next2 = function() {
                if ($scope.item_num2 <= 29) {
                    $scope.item_num2 = $scope.item_num2 + 1;
                } else { alert("亲，已经是最后一题了") }
                $scope.hide = true;
                return $scope.item_num2;
            }
            /*上一题*/
        $scope.item_num_pre2 = function() {
            if ($scope.item_num2 != 1) {
                $scope.item_num2 = $scope.item_num2 - 1;
            } else { alert("亲，已经是第一题了"); }
            $scope.hide = true;
            return $scope.item_num2;
        }
    });
