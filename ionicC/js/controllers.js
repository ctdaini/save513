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

/*选择章节*/
// .controller('selectPage',function ($scope) {
//     $scope.selectPage = function() {
//     $scope.num=0;
// }
// })
/*小课堂控制器*/
.controller('picCtrl', function($scope) {
        $scope.num = 0;
        $scope.item_num = 0;
        $scope.url = "http://ionicserver.applinzi.com/pics/00.png";
        $scope.pic_num = [
            '11', '12', '14', '15', '16', //0-4
            '21', '23', '24', '25', '27', '28', '29', //5-11
            '31', '310', '32', '35', '36', '37', '39', //12-18
            '41', '42', '43', '44', '46', '47', '48', '49', //19-26
            '410', '412', '413', '414', '415', '416', '417', '419', //27-34
            '51', '52', '53', '54', '55', '57', '58', '510', '511', //35-43
            '61', '62', '64', '65', '66', '67', '68', '69', '611' //44-52
        ];
        $scope.pageArr = [
            '第1章 初始C程序',
            '第2章 C中数据类型',
            '第3章 C中的运算符',
            '第4章 C程序结构语句',
            '第5章 函数的秘密',
            '第6章 数组'
        ];

        /*选择难度*/
        $scope.change = function(x) {
                console.log(x);
                if (x == 1) {
                    $scope.item_num = 0; //章节起始点
                    $scope.end_num = 4; //章节终止点
                    $scope.page = $scope.pageArr[0]; //章节标题选择
                }
                if (x == 2) {
                    $scope.item_num = 5;
                    $scope.end_num = 11;
                    $scope.page = $scope.pageArr[1];
                }
                if (x == 3) {
                    $scope.item_num = 12;
                    $scope.end_num = 18;
                    $scope.page = $scope.pageArr[2];
                }
                if (x == 4) {
                    $scope.item_num = 19;
                    $scope.end_num = 34;
                    $scope.page = $scope.pageArr[3];
                }
                if (x == 5) {
                    $scope.item_num = 35;
                    $scope.end_num = 43;
                    $scope.page = $scope.pageArr[4];
                }
                if (x == 6) {
                    $scope.item_num = 44;
                    $scope.end_num = 52;
                    $scope.page = $scope.pageArr[5];
                }
                $scope.url = "http://ionicserver.applinzi.com/pics/";
                $scope.url += $scope.pic_num[$scope.item_num];
                $scope.url += ".png";
            }
            /*获取图片*/
        $scope.pic_next = function() {

            if ($scope.item_num <= $scope.end_num - 1) {
                $scope.item_num = $scope.item_num + 1;
                $scope.url = "http://ionicserver.applinzi.com/pics/";
                $scope.url += $scope.pic_num[$scope.item_num];
                $scope.url += ".png";
                return $scope.item_num;
            } else { alert("亲，请选择章节"); }
        }
        $scope.pic_pre = function() {

            if ($scope.item_num != 0) {
                $scope.item_num = $scope.item_num - 1;
                $scope.url = "http://ionicserver.applinzi.com/pics/";
                $scope.url += $scope.pic_num[$scope.item_num];
                $scope.url += ".png";
                return $scope.item_num;
            } else { alert("亲，已经是第一页咯"); }
        }
    })
    /*选择题的控制器*/

.controller('select', function($scope, $http) {
        $scope.num = 0;
        $scope.item_num = 1;
        $scope.end_num = 49;
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
            /*选择难度*/

        $scope.change = function(x) {
            console.log(x);
            if (x == 1) {
                $scope.item_num = 1;
                $scope.end_num = 49;
            }
            if (x == 2) {
                $scope.item_num = 51;
                $scope.end_num = 99;
            }
            if (x == 3) {
                $scope.item_num = 101;
                $scope.end_num = 149;
            }
        }

        /*下一题*/
        $scope.item_num_next = function() {
                if ($scope.item_num <= $scope.end_num) {
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
        $scope.end_num2 = 9;
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
            /*选择难度*/

        $scope.change = function(x) {
                console.log(x);
                if (x == 1) {
                    $scope.item_num2 = 1;
                    $scope.end_num2 = 9;
                }
                if (x == 2) {
                    $scope.item_num2 = 11;
                    $scope.end_num2 = 19;
                }
                if (x == 3) {
                    $scope.item_num2 = 21;
                    $scope.end_num2 = 29;
                }
            }
            /*下一题*/
        $scope.item_num_next2 = function() {
                if ($scope.item_num2 <= $scope.end_num2) {
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
