const glob = require('glob');
const path = require('path');
const config = require('../../config');

const { SRC_DIR, GLOB_PATTERNS } = config;

const jsEntries = glob.sync(path.join(SRC_DIR, 'js', GLOB_PATTERNS, '**', '*.entry.js'));
const scssEntries = glob.sync(path.join(SRC_DIR, 'scss', GLOB_PATTERNS, '**', '*.entry.scss'));

const extractSlugs = (filePath) => {
    const segments = filePath.split('/');
    const groupSlug = segments.slice(-2)[0];
    const variantSlug = segments.slice(-1)[0].split('.')[0];
    return { groupSlug, variantSlug };
};

module.exports = () => {
    const allEntries = [...jsEntries, ...scssEntries];

    return allEntries.reduce((accumulator, entryPath) => {
        const { groupSlug, variantSlug } = extractSlugs(entryPath);
        const key = `${groupSlug}.${variantSlug}`;
        accumulator[key] = accumulator[key] || [];
        accumulator[key].push(entryPath);
        return accumulator;
    }, {});
};
