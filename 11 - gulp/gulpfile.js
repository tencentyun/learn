var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync').create();

// 创建一个任务 default
gulp.task('test',function (){
	console.log('hello world');
});


// src匹配当前目录下的文件   dest 复制
gulp.task('copy',function (){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist/'));      // 建立pipe管道进行复制
});

// 压缩js代码
gulp.task('jsmin',function (){
	gulp.src('src/js/app.js')
		.pipe(jsmin())					// 压缩代码
		.pipe(gulp.dest('dist/js'));	// 压缩完成之后放到其它的文件夹
    browserSync.reload();
});

// 压缩混淆js代码
gulp.task('uglify1',function (){
    gulp.src('src/js/app.js')
        .pipe(jsmin())					// 压缩代码
        .pipe(uglify())                 // 混淆代码
        .pipe(gulp.dest('dist/js'));	// 压缩完成之后放到其它的文件夹
});

// 压缩混淆js代码
gulp.task('uglify2',function (){
    pump([
        gulp.src('src/js/app.js'),
        jsmin(),
        uglify(),
        gulp.dest('dist/js')
    ])
});


// 压缩css代码
gulp.task('cssnano',function (){
   gulp.src('src/css/app.css')
       .pipe(cssnano())
       .pipe(gulp.dest('dist/css'));
   browserSync.reload();
});


// 压缩HTML
gulp.task('htmlmin',function (){
    gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
    browserSync.reload();
});

// 监听文件变化  自动压缩
gulp.task('watch',function(){
    gulp.watch('src/index.html',['htmlmin']);
});

// 监听压缩代码的刷新
gulp.task('browser-sync',function (){
   browserSync.init({              // 找到服务器的根目录
       server:{                    // server为虚拟的服务器
           baseDir:"./dist"        // 服务器主目录
       }
   });
    gulp.watch('src/index.html',['htmlmin']);
    gulp.watch('src/js/app.js',['jsmin']);
    gulp.watch('src/css/app.css',['cssnano']);
});


// 监听代码修改的刷新
gulp.task('browser',function (){
    browserSync.init({              // 找到服务器的根目录
        server:{                    // server为虚拟的服务器
            baseDir:"./src"        // 服务器主目录
        }
    });
    gulp.watch('src/index.html',function (){
        browserSync.reload();
    });
    gulp.watch('src/css/app.css',function (){
        browserSync.reload();
    });
});
