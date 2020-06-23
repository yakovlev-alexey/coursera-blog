'use strict'

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create()

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
})

gulp.task('watch:sass', function () {
  gulp.watch('./sass/*.scss', gulp.series('sass'))
})

gulp.task('browserSync', function () {
  var files = [
    './*.html',
    './css/*.css',
    './js/*.js',
    './img/*.{png,jpg,jpeg,gif}'
  ]
  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  })
})

gulp.task('default', gulp.parallel('watch:sass', 'browserSync'))