const gulp= require("gulp");
const browserSync= require('browser-sync').create();
gulp.task("Hello",function (done){
    console.log("Hello world");
    done();
});
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});