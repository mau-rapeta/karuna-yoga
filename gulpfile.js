const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
    return gulp.src([
        'src/scss/*.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Move the javascript files into our src/js folder
gulp.task('js', function(){
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js', 
        'node_modules/jquery/dist/jquery.min.js', 
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'
    ])
    .pipe(gulp.dest("src/js"));
});

// Move the third party CSS files into our src/css folder
gulp.task('css', function(){
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css', 
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
    .pipe(gulp.dest("src/css"));
});

// Static server + watching scss/html files
gulp.task('serve', ['sass'], function(){

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/main.js").on('change', browserSync.reload);
});

// Move css file fron font-awesome into our src/css folder
gulp.task('font-awesome', ['fonts'], () => {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'));
});

// Move font files from font-awesome into src/fonts folder
gulp.task('fonts', () => {
    return gulp.src([
        'node_modules/font-awesome/fonts/*',
    ])
    .pipe(gulp.dest('src/fonts'));
});

gulp.task('default', ['js', 'css', 'serve', 'font-awesome']);
