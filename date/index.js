var moment = require('moment');

// var now = new Date();
// var myBirthDay = new Date (1999, 7, 27);  //27-08-1999

// // Number of milisecond from 1-1-1970

// console.log(now.getTime());
// console.log(myBirthDay.getTime());

var now = moment('2019-04-10 7:00');
console.log(now.fromNow());