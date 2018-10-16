const gulp = require('gulp');
const connect = require('gulp-connect');
const rename = require('gulp-rename');

gulp.task('connect', function(done){
  connect.server({
    root: 'static',
    port: 8080,
    debug: true,
    livereload: true
  });
  done();
});

gulp.task('watch', function (done) {
  gulp.watch('./sass/**/*.scss', gulp.series('sass', 'livereload'));
  gulp.watch('./static/*', gulp.parallel('livereload'));
  done();
});

gulp.task('livereload', function (done){
  gulp.src('./static/*')
    .pipe(connect.reload());
  done();
});

gulp.task('sass', (done) => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
//  const gSass = require('gulp-sass');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
//  const advVariables = require('postcss-advanced-variables');
//  const custProps = require('postcss-custom-properties');
//  const partImport = require('postcss-partial-import');
//  const easyImport = require('postcss-easy-import');
//  const nested = require('postcss-nested');
//  const simpleVars = require('postcss-simple-vars');
//  const pmix = require('postcss-mixins');
//  const partImport = require('postcss-partial-import');
//  const size = require('gulp-size'),
  const sourceFile = 'sass/*.scss';
  const outputFolder = 'static/css';
  return gulp
    .src(sourceFile)
    .pipe(sourcemaps.init())
/*    .pipe(gSass({
      indentType: 'tab',
      indentWidth: 1,
      outputStyle: 'expanded' // Expanded so that our CSS is readable
    }).on("error", gSass.logError))*/
    .pipe(postcss([
//      glob(),
      postcssImport(),
      precss(),
      autoprefixer({
        browsers: ['last 2 versions', 'IE >= 11', '> 1%'],
        cascade: false
      }),
      cssnano()
    ]))
    .pipe(rename('main.css'))
    .pipe(sourcemaps.write('.'))
//    .pipe(size({ showFiles:true }))
    .pipe(gulp.dest(outputFolder))
    .on('end', done);
});

gulp.task('default', gulp.series('connect', 'watch', 'sass'));
