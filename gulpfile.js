var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('markdown', function () {
    return gulp.src('*.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch(['*.md'], ['markdown']);
});

gulp.task('default', ['markdown', 'watch']);
