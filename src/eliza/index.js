'use strict';

const readline = require('readline');
const Eliza = require('./eliza.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const eliza = new Eliza();
eliza.memSize = 100;

if (eliza.quit) {
  // send the user back to the hub
}

console.log( eliza.getInitial() );

rl.on('line', (input) => {
  console.log( eliza.transform(input) );
});


