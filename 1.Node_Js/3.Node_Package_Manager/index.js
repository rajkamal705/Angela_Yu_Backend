/**
 -> npm init : to install package.json, node modules and package.lock.json

 * Q> What is NPM?
   -> Node package manager. 
   -> open source.
   -> To install package: use: npm install <pkg>
 */

/** Generate random name using npm package:  */

// var generateName = require('sillyname');
// var sillyName = generateName();
// console.log(`my name is ${sillyName}.`);

// same code using ESM(Ecma Script modules) or node modules.
// import generateName from 'sillyname';
// var sillyName = generateName();
// console.log(`my name is ${sillyName}.`);


/**
 * Task: Generate superhero name using npm package.
 */

import superHeroes from 'superheroes';
const name = superHeroes.random();
console.log(`i am ${name}.`);