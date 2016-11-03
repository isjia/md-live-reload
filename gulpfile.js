var gulp = require('gulp');
var markdown = require('gulp-markdown');
var wrap = require('gulp-wrap');
var browserSync = require('browser-sync').create();

gulp.task('markdown', function () {
    return gulp.src('./note/*.md')
        .pipe(markdown())
        .pipe(wrap({src:"./src/layout/default.html"}))
        .pipe(gulp.dest('./dist/note'));
});

gulp.task('serve', ['markdown'], function(){
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('./note/*.md', ['markdown']);
  gulp.watch(['./dist/**/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
