var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del")

// Compile SCSS files to CSS
function scss() {

    //Delete our old css files
    del(["static/css/**/*"])

    //compile hashed css files
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer())
        .pipe(hash())
        .pipe(gulp.dest("static/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("data/css"))
}

// Hash images
function images() {
    del(["static/images/**/*"])
    return gulp.src("src/images/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/images"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/images"))
}

// Hash javascript
function javascript() {
    del(["static/js/**/*"])
    gulp.src("src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/js"))
}

// Watch asset folder for changes
function watch() {
    gulp.watch("src/scss/**/*", scss)
    gulp.watch("src/images/**/*", images)
    gulp.watch("src/js/**/*", javascript)
}

// Set watch as default task
gulp.task("default", gulp.series(watch))