var gulp = require("gulp");
var jade = require("gulp-jade");

gulp.task("default", function() {
    gulp.src("src/index.jade")
    .pipe(jade())
    .pipe(gulp.dest("./"));
});