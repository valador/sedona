const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'static',
    port: 8080,
    debug: true,
    livereload: true,
  });
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['scss']);
  gulp.watch('./static/**/*', ['livereload']);
});

gulp.task('livereload', function (){
  gulp.src('./static/**/*')
    .pipe(connect.reload());
});

const colors = new Map([
  ["white", "#fff"],
  ["black", "#000"],
  ["textfield-container", "#f2f2f2"],
  ["textfield-hover", "#ebebeb"],
  ["bg-white", "#eee"],
  ["blue", "#81b3d2"],
  ["blue-hover", "#669ec0"],
  ["blue-active", "#5496bd"],
  ["brown", "#766357"],
  ["brown-hover", "#604e43"],
  ["brown-active", "#503e33"],
  ["footer-white", "#f9fbf6"],
  ["gray", "#333"],
  ["shadow-cont", "#000101"],
  ["nav-current", "#766357"]
]);



//не работают кастомные функции, завести или забить...
gulp.task('scss', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  const functions = require('postcss-functions');
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      precss(),
      functions({
        functions: {
          color: function(key) {
            if (){
              return map-get($colors, $key);
            }
          }
        }
      }),
      autoprefixer({browsers: ['last 2 versions', 'IE >= 11', '> 1%']}),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('static'));
});

gulp.task('default', ['connect', 'watch', 'scss']);
