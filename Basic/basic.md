-- Khởi tạo Sever 
+)npm -g install static-server
+)cd Đến File Làm Việc
+)static-server
-- kiểm tra địa chỉ ip trên win
Cách 1: Search gg với từ khóa: What is my ip address
Cách 2: sử dụng cmd gõ ipconfig
--> Cách dùng điện thoại truy cập cập web của mình để thiết kế responsive
+)Khởi tạo sever
+)Lấy địa chỉ ip của máy(IPv4Address: exp(192.168.2.100))
+)Vào Điện thoại và gõ địa chỉ IP + port của máy VD: 192.168.2.1:9080
Hoặc sử dụng tunel(Hầm):
Cài đặt ngrok
Bấm trên cmd nodejs là: ngrok http 9080
Sau đó copy địa chỉ domain vào máy điện thoại
-- Cac The Meta
Thuộc tính	Miêu tả
name	    Đặt tên cho đặc tính. Ví dụ như từ khóa, sự mô tả, tên tác giả,… bất cứ thứ gì.
content	    Xác định giá trị của đặc tính
scheme	    Xác định một giản đồ để giải thích giá trị của đặc tính (như là công khai trong thuộc tính content).
http-equiv	Được sử dụng cho các Header thông báo phản hồi HTTP. Ví dụ: thiết lập các Cookie...
-- Cách khởi tạo sever Json
+) npm install -g json-server
+) cd tới file Json
+)json-server --watch db.json --port 9081
// Debug, Constack, breakpoint
Debug: Giải quyết lỗi
Constack: Vd như phần 1 và 2 push vào và rồi sau đó xử lý xong thì phần 2 pop ra và như thế với phần 1
Breakpoint: Sử dụng sources trong chrome dev tool. Như kiểu ngắt chỗ chạy code tại dòng nào đấy
