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
--) Khi khai báo let ta không thể console.log(i) ở bên ngoài scope
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
<!-- Arrow Function -->
// Ví dụ dễ hiểu là khi dùng this trong function bình thường thì this sẽ tham chiếu đến obj chứa nó.
// Còn arrow function khi dùng this thì nó sẽ tham chiếu đến thằng cha gần nhất của nó. :D
var sum = (a, b) => {
  return a + b;
};
sum (3 ,5);  (trả kết quả 8)
var sum2 = (a) => a*a;
sum2 (5);   (Trả kết quả 25)
Ví dụ: 
var arr = [1, 2, 3];
arr.map(x => x*x);  (trả kết quả là 1, 4, 9)
<!-- Template String -->
function greating(name){
  return `Hi, ${name} ${1 + 2}!`
};
var result = greating('Bao');
console.log(result);  (Trả kết quả // Hi bao 3!)
<!-- Arguments -->
// Dùng để biến đổi dữ liệu của 1 mạng có n phần tử không xác định
--) function sum() {
      let result = 0;
      for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
      }
    return result;
    }
    sum (1, 2, 3, 4, 5); //15
--) function sum() {
      const numbers = Array.from(arguments);
      return numbers.reduce(function(sum, num){
        return num + sum;
      }, 0);
    }
    sum (1, 2, 3, 4, 5);  // Kết quả là 15
<!-- Default Parameters -->
function greeting(name = 'friend', language = 'en'){
  if(language === 'en'){
    return `Hi, ${name}`;
  }
  if(language === 'ja'){
    return `Kimochi, ${name}`;
  }
  return `Chào Bạn, ${name}`;
}

greeting();  //Trả kết quả là Hi, friend
<!-- Apply -->
function sum (){
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, num) => sum + num, 0);
}

// sum(1, 2, 3, 4);   //10

function average (){
  const x = sum.apply(null, arguments);
  // sum / arguments.lenght
  return x/arguments.length;
}

average(1, 2, 3, 4);   // 2.5 (Trung Bình Cộng);
<!-- Enhanced object literals -->
const name = 'tom';
const cat = {
  name,
  run(){
    console.log(`${this.name} is running`);
  }
}

cat.run();  //tom is running
<!-- Class -->
class Mouse {
  constructor(name){
    this.name = name;
  }

  run(){
    console.log(`${this.name} is running`);
  }
}

const mouse = new Mouse('Jerry');
mouse.run();    //jerry is running
<!-- Phương thức ghi đè -->
class CoffeeMachine {
  makeCoffee() {
    console.log('making coffee...')
  }
}

class SpecialCoffeeMachine extends CoffeeMachine {
  makeCoffee(){
    console.log('Making coffee and do something....');
  }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee();
// Trả kết quả là making coffe and do something
<!-- Super -->
// Super dùng để kế thừa các thuộc tính (OOP) của base class(cha) được extends ở dòng 160 (Class rangedhero được kế thừa từ class hero)
// Khi ta dùng lại các method giống nhau (Phương thức ghi đè, thi ta không thể dùng this) thay vào đó ta dùng super
class Hero {
  constructor(name, hp, damage){
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  applyDamage(damage){
    this.hp -= damage;
  }

  attack(enemy) {
    enemy.applyDamage(this.damage);
  }
}

class RangedHero extends Hero {
  constructor(name, hp, damage, range){
    super(name, hp, damage);
    this.range = range;
  }

  attack(enemy){
    super.attack(enemy);
    this.hp += this.damage;
  }
}

const heroA = new RangedHero('A', 100, 10);
const heroB = new Hero('B', 200, 5);
console.log({ heroA, heroB });
heroA.attack(heroB);
console.log({heroA, heroB});
<!-- Static -->
// Nó dùng để defines một 1 method static của class (es6)
class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
<!-- Rest (Phần Còn Lại) -->
// Nó khác với arguments. Nó trả phần còn lại của mảng còn arguments trả lại 1 obj
function log (a, ...numbers){
  console.log(a);
  console.log(numbers);
  console.log(arguments);
}

log(1, 2, 3, 4);
===========================
function sum(...nums){
  return nums.reduce((a, b) => {
    return a + b;
  })
}

sum (1, 2, 3, 5, 4);  //15
============================
function concat(separator, ...strings){
  return strings.join(separator);
}

concat('.', 'a', 'b', 'c');  //a.b.c
<!-- Const (Trải ra) -->
const a = [1, 2, 3];
const b = [1, ...a, 4];
console.log(a);  //[ 1, 2, 3 ]
console.log(b);  //[ 1, 1, 2, 3, 4 ] (Trải giá trị của a vào trong b);