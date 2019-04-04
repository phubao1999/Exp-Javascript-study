var fs = require('fs');
var text = fs.readFileSync('./text.txt', { encoding: 'utf8'});
console.log(text);
fs.writeFileSync('./text2.txt', 'I Am Coders.Tokyo');
var path = require('path');
var check = path.extname('text.txt');
console.log(check);