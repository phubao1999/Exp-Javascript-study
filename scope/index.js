var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
// Vì Biến B Nó đã được khai báo với giá trị là là 2(Local Scope) Còn ở ở biến fooCopy(Dòng 13) Nó đã được khai báo trước và ngoài biến (Loacl Scope) Cho nên kết quả của nó đã khác đi và có giá trị là 2