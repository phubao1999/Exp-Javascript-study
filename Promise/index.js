// promise
// var fs = require('promise-fs');

// function onDone(song){
//     console.log(song);
// }

// function onError(err){
//     console.log(error);
// }

// function readFile(path){
//     return fs.readFile(path, {encoding: 'utf8'});
// }

// readFile('song1.txt')
//     .then(onDone)
//     .then (function() {
//         return readFile('song2.txt');
//     })
//     .then(onDone)
//     .catch(onError);

// Đây là công thức khởi tạo promise
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, function(err, data){
            if (err){
                reject(err);
            }  else {
                resolve(data);
            }
        })
    });
}

readFilePromise('song1.txt')
    .then(function(song1){
        console.log(song1);
    })
    .catch(function(err){
        console.log(error);
    })

readFilePromise('song2.txt')
    .then(function(song2){
        console.log(song2);
    })
    .catch(function(err){
        console.log(error);
    })

// Chỗ Dưới Đây Sẽ Bị Báo Lỗi
readFilePromise('song3.txt')
    .then(function(song3){
        console.log(song3);
    })
    .catch(function(err){
        console.log(error);
    })