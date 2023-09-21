const { NODE_ENV } = require('./_env');
const { DIST_DIR, SRC_DIR } = require('./_paths');
const { GLOB_PATTERNS } = require('./_patterns');
module.exports = { NODE_ENV, DIST_DIR, SRC_DIR, GLOB_PATTERNS };
