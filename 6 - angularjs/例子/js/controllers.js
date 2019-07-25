/**
 * Created by lenovo on 2017/12/19.
 */
myApp.controller('DemoCtrl',['$scope','$http',function ($scope,$http){

//            $scope.clickBtn = function (){
//                alert("我被点击了")
//            }

    $http({
        method:'post',
        url:'http://139.129.235.171:8088/hui/proxyMethod',
        data:JSON.stringify({
            "serviceName":"InformationController",
            "methodName":"findById",
            "id":"001b318e1b84478baca051fe7a2573f1"
        })
    }).then(function success(response){
        $scope.newsContext = response.data.Information.context;
        console.log(response.data);
    },function error(response){

    })

}])