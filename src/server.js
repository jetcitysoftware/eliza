'use strict';

/***
 * Express/Socket.io server
 * @module src/server
 ***/

// Express
const express = require('express');
const app = express();
const server = require('http').Server(app);

// Starts up our IO Events server
const io = require('socket.io')(server);
const events = require('./api/v1.events.js');
events(io);

// Just a logger for dev purposes
const morgan = require('morgan');
app.use(morgan('tiny'));

// Express routes which aren't necessary
const v1Router = require('./api/v1.router.js');
app.use(v1Router);

module.exports = {
  app, // Express app
  server, // Integrated Express/Socket.io server
  start: port =>
    server.listen(port, err => {
      if (err) {
        console.error('There was an error starting the server...');
      } else {
        console.log(`You are connected to the Express server on port ${port}...`);
        console.log(`Socket.io server up and running!`);
      }
    }),
};
