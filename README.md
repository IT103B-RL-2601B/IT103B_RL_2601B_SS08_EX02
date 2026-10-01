
### 1. Phân tích nguyên nhân kỹ thuật & Bảng Test Cases

#### Phân tích lỗi mã nguồn

* **Lỗi 1: Sai thứ tự điều phối xe vào sạc (Dùng `pop()` thay vì `shift()`)**
* **Dòng lệnh lỗi:** `const xeVaoSac = hangDoiXeCho.pop();`
* **Nguyên nhân:** `pop()` lấy và xóa phần tử ở cuối mảng (`'51C-45678'`), làm đảo lộn thứ tự phục vụ thành LIFO (xe đến sau lại được sạc trước). Đúng nguyên tắc hàng đợi FIFO (First In First Out), xe đến sớm nhất đang nằm ở vị trí đầu mảng (chỉ số `0`).
* **Giải pháp:** Đổi sang dùng `hangDoiXeCho.shift()` để lấy ra phần tử đầu tiên (`'30A-98765'`).
* **Lỗi 2: Duyệt vượt biên mảng (Off-by-one Error)**
* **Dòng lệnh lỗi:** `for (let i = 0; i <= hangDoiXeCho.length; i++)`
* **Nguyên nhân:** Sau khi rút 1 xe và thêm 1 xe, mảng có độ dài là `3` (chỉ số hợp lệ từ `0` đến `2`). Dấu so sánh `<=` làm vòng lặp chạy thêm lượt thứ 4 với `i = 3`. Giá trị `hangDoiXeCho[3]` không tồn tại nên trả về `undefined`, dẫn đến bảng LED in ra dòng `STT 4: undefined`.
* **Giải pháp:** Sửa điều kiện dừng thành `i < hangDoiXeCho.length`.


#### Bảng Test Cases đối chứng (`README.md`)

| **Trường hợp kiểm thử**                          | **Dữ liệu đầu vào**                                                     | **Kết quả sai thực tế**                                                 | **Kết quả đúng mong đợi**                                             |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **TC01: Điều phối xe vào sạc và nhận xe mới** | `hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678']`Thêm xe:`'43D-88888'` | Xe vào sạc:`51C-45678`Hàng đợi:`['30A-98765', '29B-12345', '43D-88888']` | Xe vào sạc:`30A-98765`Hàng đợi:`['29B-12345', '51C-45678', '43D-88888']` |
| **TC02: Hiển thị danh sách lên bảng LED**        | Hàng đợi còn lại sau điều phối và thêm mới (3 phần tử)                | In ra 4 dòng:`STT 1: ...STT 2: ...``STT 3: ...STT 4: undefined`              | In đúng 3 dòng:`STT 1: 29B-12345STT 2: 51C-45678``STT 3: 43D-88888`        |
