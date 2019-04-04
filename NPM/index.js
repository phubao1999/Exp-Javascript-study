var readlineSync = require('readline-sync');
var pet = {};

var name = readlineSync.question('Your Pet Name:');
var weight = readlineSync.question('Weight:');
var gender = readlineSync.question('Pet Gender (Male/Female):');

pet.name = name;
pet.weight = parseInt(weight);
pet.gender = gender;

console.log(pet);