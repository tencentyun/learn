/**
 * Created by lenovo on 2018/3/19.
 */

var app = angular.module('myApp',[]);

var url = 'http://172.21.70.3:8086/';

app.controller('weixinCtrl',['$scope','$http',function ($scope,$http){

    // 创建部门
    $scope.createParFun = function (){
        $http({
            method:'post',
            url:url + 'wx/b',
            data:JSON.stringify(JSON.parse($scope.createPar))
        }).then(function successCallback(response){

            console.log(response.data);
        },function errorCallback(){
            console.log('错误');
        });
    };

    // 创建成员
    $scope.createUseFun = function (){
        console.log(JSON.parse($scope.createUse));
        console.log(JSON.stringify(JSON.parse($scope.createUse)));
        $http({
            method:'post',
            url:url + 'wx/c',
            data:JSON.parse($scope.createUse)
        }).then(function successCallback(response){

            console.log(response.data);
        },function errorCallback(){
            console.log('错误');
        });
    }

    // 创建应用
    $scope.createAppFun = function (){
        console.log(JSON.parse($scope.createApp));
        $http({
            method:'post',
            url:url + 'wx/d',
            data:JSON.stringify(JSON.parse($scope.createApp))
        }).then(function successCallback(response){

            console.log(response.data);
        },function errorCallback(){
            console.log('错误');
        });
    }


}])