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
.....Scope, callback, bất đồng bộ trong js
