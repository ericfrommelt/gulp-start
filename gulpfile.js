const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload

  gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream:true}))
  })

  gulp.task('browser-sync', function() {
    browserSync({
      server: {
        baseDir: 'dist/'
      }
    });
  });

  gulp.task('html', function() {
    gulp.src('./*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream:true}))
  })

  gulp.task('js', function() {
    gulp.src('js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream:true}))
  })

  gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('js/*.js', ['js']);
  })

  gulp.task('default', ['browser-sync', 'sass', 'html', 'js', 'watch']);