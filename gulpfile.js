const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp
    .src('./src/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(plumber())
    .pipe(
      autoprefixer({
        grid: true,
        cascade: false,
      })
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    files: ['./dist/**/*'],
    port: 3010,
    server: {
      baseDir: './dist/',
    },
    // files: ['./**/*'],
    // proxy: {
    //   target: 'localhost:8000',
    // },
  });
});

gulp.task('watch', function () {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.task('sass'));
});

gulp.task(
  'default',
  gulp.series(gulp.parallel('browser-sync', 'watch'), function () {})
);
