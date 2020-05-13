let gulp = require('gulp')
let htmlmin = require('gulp-htmlmin')
let cssmin = require('gulp-clean-css')
let uglify = require('gulp-uglify')
let babel = require('gulp-babel')

//html
gulp.task('copy-html',async()=>{
    gulp.src('./*.html')
    .pipe(htmlmin({
        collapseWhitespace:true,//删除空格【压缩】
        removeComments:true,
        collapseBooleanAttributes:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true
    }))
    .pipe(gulp.dest('D:\\LMJ\\ShangHaiPrework-QF\\nz-0203\\JS\\phpstudy_pro\\WWW\\Mi'))
})

//css
gulp.task('copy-css',async()=>{
    gulp.src('./css/**/*')
    .pipe(htmlmin({
        collapseWhitespace:true,//删除空格【压缩】
        removeComments:true,
        collapseBooleanAttributes:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true
    }))
    .pipe(gulp.dest('D:\\LMJ\\ShangHaiPrework-QF\\nz-0203\\JS\\phpstudy_pro\\WWW\\Mi\\css'))
})