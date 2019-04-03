var Mouse = require('./index1')   //Export Module của  Mouse tới index1
var Cat = require('./index2')   //Export Module của  Cat tới index2

var mickey = new Mouse('Black');
var jerry = new Mouse('Brown');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
console.log(tom);