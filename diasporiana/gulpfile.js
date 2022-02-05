// Initialize plugins
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plugins = require('gulp-load-plugins')();

// Initialize folders path
const paths = {
    css: {
        src: 'source/scss/*.scss',
        dest: 'build/assets/css'
    },
    js: {
        src: 'source/js/*.js',
        dest: 'build/assets/js'
    },
    html: {
        src: 'source/html/*.pug',
        dest: 'build'
    }
};


function clean() {
    return gulp.src(paths.html.dest)
        .pipe(plugins.clean())
    ;
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(plugins.pug({
            pretty: true
        }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream())
    ;
}

function css() {
    return gulp.src(paths.css.src)
        .pipe(plugins.rigger())
        .pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
        // .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.css.dest))
        .pipe(browserSync.stream())
    ;
}

function js() {
    return gulp.src(paths.js.src, { sourcemaps: true })
        .pipe(plugins.rigger())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream())
    ;
}

function assets() {
    return gulp.src('./source/img/assets/**').pipe(gulp.dest('./build/assets'))
        && gulp.src('./source/img/media/**').pipe(gulp.dest('./build/assets/img'))
    ;
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    const srcJS = paths.js.src.replace('/*.js', '/**/*.js');
    const srcCSS = paths.css.src.replace('/*.scss', '/**/*.scss');
    const srcHTML = paths.html.src.replace('/*.pug', '/**/*.pug');

    gulp.watch(srcJS, js).on('change', browserSync.reload);
    gulp.watch(srcCSS, css).on('change', browserSync.reload);
    gulp.watch(srcHTML, html).on('change', browserSync.reload);
}

const build = gulp.series(assets, gulp.parallel(html, css, js));

exports.clean = clean;
exports.assets = assets;
exports.html = html;
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = watch;
