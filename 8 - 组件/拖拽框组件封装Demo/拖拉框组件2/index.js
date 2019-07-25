var app = angular.module('myApp',[]);

app.controller('demoCtrl1',['$scope',function ($scope){

    // 数据初始化
    $scope.data = {
        band_addClass: 'xu-fei-list1',       // 类名 (这个一定不能重名)
        band_labels: [100, 200, 500,1000],   // 坐标轴的节点
        band_max_width: 1000,                // 坐标轴的最大节点
        band_width: 0,                       // 输入框初始值
        band_percent: 0                      // 进度条初始所占比例
    };

    // 监听数据变化区
    $scope.inputNum = {};
    $scope.inputNum.dataNum = '0';
    $scope.$watch('inputNum.dataNum',function (a,b){
        // a为监听变化之后的值
        console.log('控制器' + a);
    });
}]);

app.controller('demoCtrl2',['$scope',function ($scope){
    // 数据区
    $scope.data = {
        band_addClass: 'xu-fei-list2',
        band_divWidth: '600',
        band_labels: [10, 50, 100, 200],
        band_max_width: 200,
        band_width: 0,
        band_percent: 0
    };

    $scope.inputNum = {};
    $scope.inputNum.dataNum = '0';
    $scope.$watch('inputNum.dataNum',function (a,b){
        console.log('控制器' + a);
    });
}]);


app.directive('haulMethod', [function () {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'tpl.html',
        replace: true,
        link:function (scope,element,attrs){

            element.addClass(scope.data.band_addClass);

            // 拖拉设置宽带
            var pull_progress = (function (config, undefined) {

                // 初始化step
                config.step = [
                    config.labels[0],
                    config.labels[1] - config.labels[0],
                    config.labels[2] - config.labels[1],
                    config.labels[3] - config.labels[2]
                ];

                // 获取当前滚动条的节点
                var fa_cla = $('.' + scope.data.band_addClass).find('.xufei-progress-box');
                var bigWidth = fa_cla.width();

                // 根据宽度计算带宽
                var bandBase = bigWidth / config.labels.length;
                var progress_base = {};
                config.step.forEach(function (item, index) {
                    progress_base['to' + index] = item / bandBase
                });

                //拖动进度条的地方
                var tag = false,
                    ox = 0,
                    left = 0,
                    bgleft = 0;
                fa_cla.children('.pull-btn').mousedown(function (e) {
                    ox = e.pageX - left;
                    tag = true;
                    // console.log(`拖动按钮`)
                });
                $(document).mouseup(function () {
                    tag = false;
                });

                //鼠标移动
                fa_cla.mousemove(function (e) {
                    if (tag) {
                        left = e.pageX - ox;
                        if (left <= 0) {
                            left = 0;
                        } else if (left > bigWidth) {
                            left = bigWidth;
                        }

                        var band = 0;
                        switch (true) {
                            case ~~left <= bandBase:
                                // console.log(`小于75`)
                                band = parseInt(left * progress_base.to0);
                                break;
                            case ~~left <= bandBase * 2:
                                band = parseInt((left - bandBase) * progress_base.to1 + config.labels[0]);
                                // console.log(`小于150`)
                                break;
                            case ~~left <= bandBase * 3:
                                band = parseInt((left - 2 * bandBase) * progress_base.to2 + config.labels[1]);
                                // console.log(`小于225`)
                                break;
                            default:
                                band = parseInt((left - 3 * bandBase) * progress_base.to3 + config.labels[2]);
                        }

                        // 输入框的值
                        scope.inputNum.dataNum = band;

                        //动态触发
                        scope.$digest() ;
                        scope.data.band_percent = (left / bigWidth) * 100;
                        $(this).find('.progress-bar').css('width',scope.data.band_percent + '%');
                        $(this).children('.pull-btn').css('left', left);

                    }
                });

                // 鼠标点击
                fa_cla.click(function (e) {
                    if (!tag) {
                        bgleft = $(this).offset().left;
                        left = e.pageX - bgleft;
                        if (left <= 0) {
                            left = 0;
                        } else if (left > bigWidth) {
                            left = bigWidth;
                        }

                        var band = 0;
                        switch (true) {
                            case ~~left <= bandBase:
                                // console.log(`小于75`)
                                band = parseInt(left * progress_base.to0);
                                break;
                            case ~~left <= bandBase * 2:
                                band = parseInt((left - bandBase) * progress_base.to1 + config.labels[0]);
                                // console.log(`小于150`)
                                break;
                            case ~~left <= bandBase * 3:
                                band = parseInt((left - 2 * bandBase) * progress_base.to2 + config.labels[1]);
                                // console.log(`小于225`)
                                break;
                            default:
                                band = parseInt((left - 3 * bandBase) * progress_base.to3 + config.labels[2]);
                        }

                        // 输入框的值
                        scope.inputNum.dataNum = band;

                        //动态触发
                        scope.$digest() ;
                        scope.data.band_percent = (left / bigWidth) * 100;
                        // 进度条颜色的变化
                        $(this).find('.progress-bar').css('width',scope.data.band_percent + '%');
                        // 进度条按钮的变化
                        $(this).children('.pull-btn').css('left', left);
                    }
                });

                scope.$watch('inputNum.dataNum',function (band,b){
                    // 判断输入框的值不能超过最大值 不能超过最小值
                    if(band < 0){
                        scope.inputNum.dataNum = 0;
                        band = 0;
                    }else if(band > scope.data.band_max_width){
                        scope.inputNum.dataNum = scope.data.band_max_width;
                        band = scope.data.band_max_width;
                    }
                    // 带宽变成距离
                    (function band2left(band) {
                        var left = 0;
                        switch (true) {
                            case band <= config.labels[0]:
                                left = band / progress_base.to0;
                                break;
                            case band <= config.labels[1]:
                                left = (band - config.labels[0]) / progress_base.to1 + bandBase;
                                break;
                            case band <= config.labels[2]:
                                left = (band - config.labels[1]) / progress_base.to2 + 2 * bandBase;
                                break;
                            default:
                                left = (band - config.labels[2]) / progress_base.to3 + 3 * bandBase;
                        }
                        scope.data.band_percent = (left / bigWidth) * 100;
                        // 进度条颜色的变化
                        fa_cla.find('.progress-bar').css('width',scope.data.band_percent + '%');
                        // 进度条按钮的变化
                        fa_cla.children('.pull-btn').css('left', left);
                    })(band);

                });

            })({
                labels: scope.data.band_labels,         // 坐标轴的数据  数组
                aClass: scope.data.band_addClass,       // 动态添加类
                pullBtnClass: '.pull-btn'               // 按钮类
            }, undefined)

        }
    }
}]);








