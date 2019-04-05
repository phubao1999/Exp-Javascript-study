For: Dùng Để Lặp stt ptu trong obj. Biết được vòng đang lặp qua là bao nhiêu
For..of: Dùng để lặp ptu trong obj. Viết nhanh hơn
For..in: Dùng để lặp các key trong obj.
Array method: a.concat(b): Đẩy ptu cua b vào a.
a.push(b):Tính độ dài của mảng đã có ptu cua b vào
//a: Ra biến a đã có thêm ptu của b
a.pop: Đẩy ra giá trị cuối dùng của a
a.shift: Đẩy ra giá trị đầu tiên của a
a.unshift(5): Đẩy vào giá trị đầu của mảng a là 5 và xuất kết quả là .length.
//a: Ra biến ra đã có thêm 5 ở đầu.
a.map: Biến đổi các phần tử trong mảng a. Ví dụ: Mảng a có 1 2 3 4. Sau khi biến đổi bằng .Map (Mũ 2 Lên) Mảng a sẽ trở thành 1 4 9 16
a.filter: Lọc mảng a. Ví dụ: Mảng có 1 2 3 4. Sau khi biến đổi mảng bằng .filter ( % 2 === 0 ) Mảng a sẽ trở thành 2 và 4.
a.find: Tìm giá trị đầu tiên thỏa mãn điều kiện. Ví Dụ: mảng có 1 2 3 4. Sau khi biến đổi mảng bằng .find ( % 2 === 0) Mẩng sẽ trở thành 2.
a.reduce: Biến đổi các giá trị nó với nha. Ví Dụ: Mảng có 1 2 3 4. Sau khi Biến đổi mảng .reduce (return a+b)Mảng sẽ trở thành 10. (1 2; 3 3; 6 4; 10)
a.sort: Sắp xếp giá trị trong mảng. Ví Dụ: mảng có 1 3 9 5 2. Sau khi biến đổi mảng .sort với các cú pháp như sau
var numbers = [1, 3, 9, 5, 2];
var ascendingNumbers = numbers.sort(function(a, b){
    return a - b;    // Value < 0;
})
console.log('ascendingNumbers');  // 1, 2, 3, 5, 9
=>> Var và let giống nhau ở chỗ đều là keyword để khai báo biến
Khác: Let Tạo ra biến chỉ có thể truy cập trong block chứa nó. Còn var thì tạo ra biến có phạm vi truy cập suốt function chứa nó
-)Ví Dụ: function foo() {
var x = 10;
if (true) {
var(let) x = 20; // x ở đây cũng là x ở trên
console.log(x); // in ra 20
}
console.log(x); // vẫn là 20
}
function foo() {
let x = 10;
if (true) {
let x = 20; // x này là x khác rồi đấy
console.log(x); // in ra 20
}
console.log(x); // in ra 10
}
This: con trỏ this thường được sử dụng để chỉ đến object chứa phương thức đang được gọi thực thi.
=>>Phân Biệt [array] và {Object}
Array: Thứ Tự Dữ Liệu là Quan Trọng Nhất (z-index)
Object: Tên của dữ liệu là quan trọng nhất (key: 'Value')
--Các Bước trong ajax
Giai đoạn 1: Client gửi yêu cầu lên phía server sử dụng XMLHttpRequest. ( trong giai đoạn này sẽ gửi yêu cầu lên một trang php trên phía server).
Giai đoạn 2 : Server sẽ xử lý yêu cầu.
Giai đoạn 3: Truy vấn đến CSDL ( cập nhật ,hoặc truy vấn dữ liệu trong DB).
Giai đoạn 4 : Trang php trên phía server sẽ trả lại kết quả
Giai đoạn 5: AJAX sử dụng cơ chế bất đồng bộ để update lại những phần cần thay đổi thay vì phải làm mới lại toàn bộ trang web.
--Math Object
GG Key Word : MDN Math Object Để xem Document
Math.PI: Số Pi (3.14......)
Math.ceil: Làm tròn lên
Math.floot: Làm Tròn Xuống
Math.round: Làm tròn
Math.max: Xuất kết quả lớn nhất trong mảng
Math.min: Xuất kết quả nhỏ nhất trong mảng
Math.random: Xuất ra kết quả ngẫu nhiên (Từ 0 -> 1)
-- Toán Tử "New"
Dùng để thay thế, cập nhật hay sửa đổi các dữ liệu trong mảng. giữ nguyên các tính chất cần giữ và cập nhật
-- Prototype trong javascript
Dùng để khai báo các phần tử dùng chung hoặc có nhiệm vụ chung với các mảng
-- Lập trình OOP
+)Tính đóng gói (Encapsulation):
Là cách che giấu các thuộc tính bên trong nó. Những đối tượng khác không thể trực tiếp tác động đến nó. Chỉ có thể thông qua các method public của nó thì mới có thể tác động được
+)Tính kế thừa (Inheritance):
Là kỹ thuật cho phép kế thừa lại những tính năng mà đối tượng khác đã có, giúp tránh việc lặp code và dư thừa mà chỉ xử lại việc tương tự
+)Tính đa hình (Polymorphism ):
Là một đối tượng thuộc các lớp khác nhau có thể hiểu cùng một thông điệp theo cách khác nhau
VD: Chó và mèo khi nhận được mệnh lệnh "Hãy Kêu" Thì chó sẽ kêu Gâu Gâu còn mèo thì kêu Meo Meo.
==> Cả 2 con vật trên đều hiểu được thông điệp "Hãy Kêu" và thực hiện theo cách của chúng
+)Tính trừu tượng(Abstraction):
Là phương pháp trừu tượng hóa định nghĩa của 1 object nào đó qua các property(Đặc Điểm) và method(Hành động) mà object nào đó cần có
VD: Chó cần định nghĩa nó bằng các property là "Cân Nặng" "Tên" "Tuổi" "Giống Chó" Hay method "Sủa" "Chạy" "Sở thích"
-- Design Pattern 
Đơn giản dễ hiểu nó là một mẫu thiết kế có sẵn, dùng để giải quyết vấn đề
Design Pattern được tạo ra để giải quyết vấn đề, chứ không phải để phức tạp hóa nó
-- Module system nodejs
Là phương thức chia nhỏ file sever đễ dễ quản lý hơn. Ví dụ ta có obj index.js để thực hiện các method giữa chuột và mèo. Còn file index1.js và index2.js dùng để khai báo riêng ra chuột và mèo để dễ dàng quản lý. (Hay Dùng trong dự án lớn);
Cú pháp file chính sẽ là 
>> var cat = require('./cat.js');
Ở file cat.js sẽ có cú pháp
>> module.export = cat;
-- Node Built-in modules
Là các module mà cộng đồng nodejs đã build sẵn(Tương tự như bootstrap)
-- NPM (Node Package Manager)
Cách cài đặt npm
+)Dir xem danh sách và Cd tới thư mục cần khởi tạo
+)npm init. Nhập các thông số
+)npm install readline-sync --save
+)var readlineSync = require('readline-sync');
>> Đây là Comandline Interface
-- JSON method
+)stringify: Dùng để chuyển object sang dạng string của json
+)parse: Dùng để chuyển string của json sang dạng object
++-- DOM trong JS (Document Object Model)
<!-- DOM document: có nhiệm vụ lưu trữ toàn bộ các thành phần trong tài liệu của website
DOM element: có nhiệm vụ truy xuất tới thẻ HTML nào đó thông qua các thuộc tính như tên class, id, name của thẻ HTML
DOM HTML: có nhiệm vụ thay đổi giá trị nội dung và giá trị thuộc tính của các thẻ HTML
DOM CSS: có nhiệm vụ thay đổi các định dạng CSS của thẻ HTML
DOM Event: có nhiệm vụ gán các sự kiện như onclick(), onload() vào các thẻ HTML
DOM Listener: có nhiệm vụ lắng nghe các sự kiện tác động lên thẻ HTML đó
DOM Navigation dùng để quản lý, thao tác với các thẻ HTML, thể hiện mối quan hệ cha - con của các thẻ HTML
DOM Node, Nodelist: có nhiệm vụ thao tác với HTML thông qua đối tượng (Object) -->
-- If...else Js: Cú Pháp 
    if(a===b){
        console.log(a)
    } else {
        console.log(b)
    }   
Ternary Operator: Tương tự if...else
-- Else If: Cú Pháp
    if (Condition1){
        // Do Something
    } else if (Condition2){
        // Do Something else
    } else{
        // Do Something else
    }
-- Cấu Trúc Switch Case (Tương Tự if...else Nhưng khi có quá nhiều điều kiện thì nên dùng Switch case để trong gọn code hơn)
    switch (expression) {
        case value1:
        // Do Something;
        break;
        case value2:
        // Do Something;
        break;
        ...
        default:
        // Do Something;
        break;
    }
-- Vòng Lặp While, Do...While (Ít Dùng)
    While (Condition){
        // Do Something
    }
    // Do...While 
    do {
        // Do Something
    }   while (condition)



