'use strict';

/**
 * Starts up the imported server on port 3000
 */

const PORT = process.env.PORT || 4444;
const { start } = require('./src/server.js');

start(PORT);
