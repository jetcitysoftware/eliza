'use strict';

const Eliza = require('../eliza/eliza.js');
const eliza = new Eliza();
eliza.memSize = 100;



const events = io => {

  io.on('connection', socket => {
    console.log(`Socket connected with id ${socket.id}...`);
    console.log('Your app is connected');

    socket.emit('output', {display:eliza.getInitial()});

    socket.on('input', payload => {

      const reply = eliza.transform(payload);

      const message = {display: reply};
      socket.emit('output', message);

    });
    socket.on('disconnect', () => console.log(`Goodbye client: ${socket.id}`));
  });
};

module.exports = events;
