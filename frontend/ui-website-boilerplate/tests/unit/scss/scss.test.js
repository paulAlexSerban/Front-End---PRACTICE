const path = require('path');
const sassTrue = require('sass-true');
const {glob } = require('glob');

const sassFiles = glob.sync(path.join(__dirname, '**/*.spec.scss'));
sassFiles.forEach((file) => {
    sassTrue.runSass({ describe, it }, file);
});
// const sassFile = path.join(__dirname, 'scss/functions.spec.scss');
// sassTrue.runSass({ describe, it }, sassFile);

// scss.spec.js
// const path = require('path');
// const sassTrue = require('sass-true');
// const glob = require('glob');

// const testPath = `**/*.spec.scss`;

// describe('Sass', () => {
//     const testFiles = glob.sync(path.resolve(process.cwd(), testPath));

//     // Run on each file with describe() and it() functions
//     testFiles.forEach((file) => sassTrue.runSass({ file: file }, { describe, it }));
// });