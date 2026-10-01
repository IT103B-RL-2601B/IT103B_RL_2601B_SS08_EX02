// Danh sách xe đang chờ tại cổng trạm sạc
const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

// SỬA LỖI 1: Dùng shift() để lấy xe đầu tiên vào sạc theo cơ chế FIFO
const xeVaoSac = hangDoiXeCho.shift();
console.log(`Xe được điều phối vào sạc: ${xeVaoSac}`);

// Tiếp nhận xe mới vào cuối hàng đợi
hangDoiXeCho.push('43D-88888');

// SỬA LỖI 2: Đổi 'i <= hangDoiXeCho.length' thành 'i < hangDoiXeCho.length'
// để tránh in ra giá trị undefined ở cuối danh sách
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}