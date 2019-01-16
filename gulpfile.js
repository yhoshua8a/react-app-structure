
var gulp = require('gulp')
template = require('gulp-template'),
rename = require('gulp-rename'),
argv = require('yargs').argv,
path = require('path');

function createTemplate () {
    var capitalize = function(val){
      return val.charAt(0).toUpperCase() + val.slice(1);
    };
    
    var name = argv.name;
    var type = argv.type;
    var parentPath = argv.parent || '';
    var destinationPath = type === "component" ? path.join(`src/${type}s`, parentPath, `${capitalize(name)}`) : path.join(`src/${type}s`, parentPath);
    var nameFile = type === "container" ? `${capitalize(name)}Logic` : capitalize(name);
    
    return gulp
      .src(`template/${type}s/**/*`)
      .pipe(template({
        name: capitalize(name),
      }))
      .pipe(rename(function(path){
        path.basename = path.basename.replace('component', nameFile);
      }))
      .pipe(gulp.dest(destinationPath));
}

gulp.task('create-component', createTemplate);