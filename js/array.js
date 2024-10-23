// // array literal
// const array = [];
// //array contructor
// const array1 = new Array();

const mySubjects = [
  "Lập trình hợp ngữ",
  "Hệ thống thông tin di động",
  "Công nghệ phần mềm nhúng",
  "Hệ thống thông tin di động",
  "Độ phức tạp thuật toán",
  "Kỹ thuật truyền số liệu",
];
// // index: Là vị trí phần tử của mảng bắt đầu từ không
// console.log(mySubjects[2]); // in ra phần tử thứ 3 của mảng
// // length: độ dài của mảng, bắt đầu từ 1
// console.log(mySubjects.length); // lấy ra độ dài của mảng
// // cách lấy ra phần tử cuối cùng của mảng
// console.log(mySubjects[mySubjects.length -1]);
// console.log(mySubjects[6]); //undefined

// // reverse : đảo ngược các phần tử trong mảng
// console.log(mySubjects.reverse());
// // join : nối các phần tử trong mảng thành chuỗi, nó trả về 1 object
// console.log(mySubjects.join());
// // indexOf: chỉ ra vị trí đầu tiên của phần tử cần tìm
// console.log(mySubjects.indexOf("Hệ thống thông tin di động"));
// // lastIndexOf: chỉ ra vị trí cuối cùng của phần tử cần tìm
// console.log(mySubjects.lastIndexOf("Hệ thống thông tin di động"));
// // push: thêm phần tử vào cuối mảng
// mySubjects.push("Tiếng anh chuyên ngành");
// console.log(mySubjects);
// //unshift: thêm phần tử vào đầu mảng
// mySubjects.unshift("Vi xử lý");
// console.log(mySubjects);
// // pop: xóa phần tử cuối cùng trong mảng
// mySubjects.pop();
// console.log(mySubjects);
// // shift: xóa phần tử đầu tiên của mảng
// mySubjects.shift();
// console.log(mySubjects);

const number = [1, 2, 3, 4];
const total = number.reduce((acc, crr) => {
  return acc + crr;
}, 0);

console.log(typeof { total });
