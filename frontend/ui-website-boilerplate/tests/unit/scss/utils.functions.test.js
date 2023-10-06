const path = require('path');
const sassTrue = require('sass-true');
const {glob } = require('glob');

const sassFiles = glob.sync(path.join(__dirname, '**/*.spec.scss'));
sassFiles.forEach((file) => {
    sassTrue.runSass({ describe, it }, file);
});
