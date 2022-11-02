const del = require('del');
const makeDir = require('make-dir');

del.sync(['https', 'join']);
makeDir('https');
makeDir('join');