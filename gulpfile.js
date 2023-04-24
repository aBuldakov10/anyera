const {src, dest, series, task, parallel, watch} = require('gulp');
const browsersync = require('browser-sync').create();
const prefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger');
const plumber = require('gulp-plumber');
const del = require('delete');

const srcDir = 'src';
const destDir = 'docs';

const path = {
    dev: {
        html: `${destDir}/`,
        js: `${destDir}/js/`,
        css: `${destDir}/css/`,
        img: `${destDir}/img/`,
        fonts: `${destDir}/fonts/`
    },
    src: {
        html: `${srcDir}/*.html`,
        js: `${srcDir}/js/**/*.js`,
        css: `${srcDir}/css/**/*.scss`,
        img: `${srcDir}/img/**/*.*`,
        fonts: `${srcDir}/fonts/**/*.*`
    },
};

function browserSync(release) {
    browsersync.init({
        server: {baseDir: path.dev.html},
        notify: false,
    });

    watch(path.src.css, css);
    watch(path.src.js, js);
    watch(path.src.html, html);
    watch(path.src.img, img);
    watch(path.src.fonts, fonts);
}

function clean(done) {
    del([path.dev.html]);
    done();
}

function html(done) {
    src(path.src.html)
        .pipe(rigger())
        .pipe(dest(path.dev.html))
        .pipe(browsersync.stream());
    done();
}

function css(done) {
    src(path.src.css)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(prefixer())
        .pipe(dest(path.dev.css))
        .pipe(browsersync.stream());
    done();
}

function js(done) {
    src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(dest(path.dev.js))
        .pipe(browsersync.stream());
    done();
}

function img(done) {
    src(path.src.img)
        .pipe(dest(path.dev.img))
    done();
}

function fonts(done) {
    src(path.src.fonts)
        .pipe(dest(path.dev.fonts))
    done();
}

task('default', series(clean, parallel(html, css, js, img, fonts), browserSync));