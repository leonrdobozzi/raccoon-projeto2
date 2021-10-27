const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const {series} = require('gulp');

//Source Path
const js_src = "./script/*.js";

//Dist Path
const js_dist = "./dist/js";
const js_dist_name = "script.js";

//Minify e Concat Scripts
gulp.task('scripts', function() {
    return gulp.src(js_src)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat(js_dist_name))
        .pipe(plumber(js_dist))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
    gulp.watch([js_src], gulp.series('scripts'));
});

gulp.task('default', gulp.series('scripts'));