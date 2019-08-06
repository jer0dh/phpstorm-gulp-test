const { src, dest } = require('gulp');
const bump = require('gulp-bump');

const fs = require('fs');

/*const getPackageJson =  ()  => {
    return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};*/

function patch() {
/*

    const pkg = getPackageJson();  //maybe reread package.json instead of using cache
*/

    return src('./package.json')
        .pipe(bump({}))
        .pipe(dest('./'))
}

exports.default = patch;
