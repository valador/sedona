const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'static',
    port: 8080,
    debug: true,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./static/**/*', ['livereload']);
});

gulp.task('livereload', function (){
  gulp.src('./static/**/*')
    .pipe(connect.reload());
});

gulp.task('sass', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  return gulp
    .src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      precss(),
      autoprefixer({browsers: ['last 2 versions', 'IE >= 11', '> 1%']}),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', gulp.series('connect', 'watch', 'sass'));
