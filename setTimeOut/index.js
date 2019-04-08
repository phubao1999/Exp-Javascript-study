var done = function () {
    console.log('Finish');
}
console.log('start');
var timeOutId = setTimeout(done, 1000);     //1000 Milisecond
console.log('Done');

clearTimeout(timeOutId);        //Đây là hàm cho thoát chương trình setTimeOut
