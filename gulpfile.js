var gulp         = require('gulp'),
	 sass         = require('gulp-sass'),
	 browserSync  = require('browser-sync'),
	 autoprefixer = require('gulp-autoprefixer');
	 // concat       = require('gulp-concat')
	 // uglify       = require('gulp-uglifyjs'),
	 // cssnano      = require('gulp-cssnano'),
	 // del          = require('del'),
	 // rigger       = require('gulp-rigger'),
	 // rename       = require("gulp-rename");

/* dev browser sync */
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
		host: 'localhost',
		port: 8000,
		logPrefix: "spectrum"
	})
});


/* styles */
gulp.task('scss', function() {
	return gulp.src('src/scss/styles.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('src/css/'))
		.pipe(browserSync.reload({stream: true}))
});


/* --- Watch --- */
gulp.task('watch', function(){
	 gulp.watch("src/*.html").on('change', browserSync.reload);
	 gulp.watch("js/*.js").on('change', browserSync.reload);
	 gulp.watch('src/scss/*.scss', ['scss']);
});


gulp.task('default', ['browserSync', 'watch']);



/* --- BUILD --- */

// /* build html */
// gulp.task('build:html', function() {
// 	return gulp.src('src/*.html')
// 		.pipe(gulp.dest('dist/'))
// });

// /* build styles */
// gulp.task('build:css', function() {
// 	return gulp.src([
// 			'src/libs/**/*.css',
// 			'src/css/styles.css'
// 		])
// 		.pipe(concat('all.min.css'))
// 		.pipe(autoprefixer())
// 		.pipe(cssnano())
// 		.pipe(gulp.dest('dist/css/'))
// });

// /* build js*/
// gulp.task('build:js', function() {
// 	return gulp.src('src/js/main.js')
// 		.pipe(rigger()) 
// 		.pipe(uglify())
// 		.pipe(rename('all.min.js'))
// 		.pipe(gulp.dest('dist/js/'))
// });

// /* build fonts */
// gulp.task('build:fonts', function() {
// 	return gulp.src('src/fonts/**/*')
// 		.pipe(gulp.dest('dist/fonts/'))
// });

// /* build images */
// gulp.task('build:img', function() {
// 	return gulp.src('src/img/**/*')
// 		.pipe(gulp.dest('dist/img/'))
// });

// /* build css libs */
// gulp.task('build:cssLibs', function() {
// 	return gulp.src('src/libs/**/*.css')
// 		.pipe(concat('libs.min.css'))
// 		.pipe(cssnano({
// 	      discardComments: {
// 	        removeAll: true
// 	      }
// 	   }))
// 		.pipe(gulp.dest('dist/css/'))
// });



// /* build other files*/
// gulp.task('build:otherFiles', function() {
// 	return gulp.src([
// 			'src/php/**/*.*',
// 			'src/favicon.png'
// 		])
// 		.pipe(gulp.dest('dist/php/'))
// });

// gulp.task('clean', function() {
// 	return del.sync('dist');
// });

// /* --- Build --- */
// gulp.task('build', [
// 		'clean',
// 		'build:html',
// 		'build:css',
// 		'build:js',
// 		'build:img',
// 		'build:fonts',
// 		'build:otherFiles'
// 	]
// );

