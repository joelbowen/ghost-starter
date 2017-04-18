const gulp = require('gulp');
const path = require('path');
const nodeServer = require('./tasks/server');

gulp.task('dev', cb => {
  nodeServer();
});

gulp.task('dist', cb => {
  let stream = gulp
    .src(['package.json', './src/**', './src/*/**'])
    .pipe(gulp.dest('./dist'));
  return stream;
});
