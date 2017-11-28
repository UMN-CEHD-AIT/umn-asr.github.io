var buffer = require("vinyl-buffer");
var gulp = require("gulp");
var gutil = require("gulp-util");
var rename = require("gulp-rename");
var runSequence = require("run-sequence");
var sass = require("gulp-sass");
var source = require("vinyl-source-stream");

// CEHD
gulp.task("default", function() {
    runSequence(
        "sass",
        "inline-sass",
        "forms-sass",
        "svg-sass",
        "nav-sass",
        "all-sass",
        "sass-expanded",
        "inline-sass-expanded",
        "forms-sass-expanded",
        "svg-sass-expanded",
        "nav-sass-expanded",
        "all-sass-expanded"
    );
});

gulp.task("nav-sass", function() {
    return gulp.src("./peloton-styles/src/sass/nav.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/minified/"));
});

gulp.task("nav-sass-expanded", function() {
    return gulp.src("./peloton-styles/src/sass/nav.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/expanded/"));
});

gulp.task("sass", function() {
    return gulp.src("./peloton-styles/src/sass/styles.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/minified/"));
});

gulp.task("sass-expanded", function() {
    return gulp.src("./peloton-styles/src/sass/styles.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/expanded/"));
});

gulp.task("inline-sass", function() {
    return gulp.src("./peloton-styles/src/sass/inline/inline.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/minified/"));
});

gulp.task("inline-sass-expanded", function() {
    return gulp.src("./peloton-styles/src/sass/inline/inline.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/expanded/"));
});

gulp.task("forms-sass", function() {
    return gulp.src("./peloton-styles/src/sass/forms/forms.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/minified/"));
});

gulp.task("forms-sass-expanded", function() {
    return gulp.src("./peloton-styles/src/sass/forms/forms.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/expanded/"));
});

gulp.task("svg-sass", function() {
    return gulp.src("./peloton-styles/src/sass/svg/svg.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/minified/"));
});

gulp.task("svg-sass-expanded", function() {
    return gulp.src("./peloton-styles/src/sass/svg/svg.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/expanded/"));
});

gulp.task("all-sass", function() {
    return gulp.src("./peloton-styles/src/sass/all.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/minified/"));
});

gulp.task("all-sass-expanded", function() {
    return gulp.src("./peloton-styles/src/sass/all.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(gulp.dest("./peloton-styles/dist/css/expanded/"));
});

// CEHD watch task
gulp.task("watch", function() {
    gulp.watch(
        "./peloton-styles/src/sass/**/*.scss",
        [
            "sass",
            "inline-sass",
            "forms-sass",
            "svg-sass",
            "nav-sass",
            "all-sass",
            "sass-expanded",
            "inline-sass-expanded",
            "forms-sass-expanded",
            "svg-sass-expanded",
            "nav-sass-expanded",
            "all-sass-expanded"
        ]
    );
});
