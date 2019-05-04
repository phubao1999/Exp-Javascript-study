<!-- // Hoisting -->
Phân biệt var let const.
var không tuân thủ hoisting block scope( var có thể khai báo lại. Const và let sinh ra là để khắc phục nhược điểm của var. Nhằm giảm thiểu khả năng có bug và nhẹ chương trình để tối ưu).
Đều là khai báo biến. Nhưng
Var có thể khai báo đi khai báo lại trong scope. Trái ngược với let. Trong khi ta có thể khai báo
var a; (Nó có thể thực hiện lại bên ngoài scope)
let b;  (Riêng thằng này thì sẽ không thể khai báo ngoài scope. Tương tự như vậy với const)
Nhưng nếu khai báo là const c; thì sẽ bị lỗi
2 dấu '{}'Bên trong đó là 1 scope ngoại trừ trường hợp ta khai báo 1 object
// Ví Dụ
for (var(let)(const) i = 0; i <5; i++){
    console.log(i);
}
// Ở trường hợp trên ta 3 trường hợp xảy ra.
--) Khi khai báo var ta có thể console.log(i) ở bên ngoài scope {}(for)
--) Khi khai báo let ta không thể console.log(i) ở bên ngoài scope\
--) const không thể dùng trong for vì đơn giản const chỉ có thể khai báo 1 lần
<!-- Function Content và method .bind()-->
var mouse = {
  name : 'Mickey',
  sayHi: function(){
    console.log('Hi, My name is '+ this.name)
  }
};

var cat = {
  name : 'Tom'
}

var dog = {
  name : 'Bucky'
}

var say = mouse.sayHi.bind(dog);
// Trả kết quả là 'Hi, My name is Bucky'
say();

var say = mouse.sayHi.bind(cat)
// Trả kết quả là 'Hi, My name is tom'
say();