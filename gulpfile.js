const gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['scss', 'livereload']);
  gulp.watch('./static/**/*', ['livereload']);
});

gulp.task('livereload', function (){
  gulp.src('./static/**/*')
    .pipe(connect.reload());
});

gulp.task('scss', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  return gulp
    .src('static/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      precss(),
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['connect', 'watch', 'scss']);
