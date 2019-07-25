/**
 * Created by lenovo on 2017/7/6.
 */
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html){
    var $ = cheerio.load(html);

    var chapters = $('.chapter');

    // 想要获取到的数据
    //{
    //    chapterTitle:'',
    //    videos:{
    //        videoTitle:'',
    //        videoId:''
    //    }
    //}

    var courseData = [];
    chapters.each(function (item){
        var chapterTitle = $(this).find('strong').text();
        var videos = $(this).find('.video').children('li');
        var chaptersData = {
            chapterTitle:chapterTitle,
            videos:[]
        };
        videos.each(function (item){
            var videoTitle = $(this).find('.J-media-item').text();
            var videoId = $(this).find('.J-media-item').attr('href').split('video/')[1];
            chaptersData.videos.push({
                videoTitle: videoTitle,
                videoId: videoId
            })
        })
        courseData.push(chaptersData);
    });

    return courseData;
}

function printCourseInfo(courseData){
    courseData.forEach(function (item){
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle);

        var videos = item.videos;
        videos.forEach(function (item){
            console.log('[' + item.videoId + ']' + item.videoTitle);
        })

    })
}

http.get(url,function (res){
    var html = '';

    res.on('data',function (data){
        html += data;
    });

    res.on('end',function (){
        var courseData = filterChapters(html);

        printCourseInfo(courseData);
    });
}).on('error',function (){
    console.log('获取数据出错')
})