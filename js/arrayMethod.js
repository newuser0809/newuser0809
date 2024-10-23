// const animals = ["Tiger", "Lion", "Horse", "Elephant", "Monkey"];
// // slice : tạo ra một mảng giống mảng ban đầu
// const animals1 = animals.slice();
// console.log(animals1);
// // ["Tiger", "Lion", "Horse", "Elephant", "Monkey"]
// const animals3 = animals.slice(2); // tạo mảng bắt đầu từ phần tử thứ 3
// console.log(animals3);
// //["Horse", "Elephant", "Monkey"]
// const animals4 = animals.slice(1,4); // tạo mảng bắt đầu từ phần tử thứ 2 đến phần tử 4
// console.log(animals4);
// //["Lion", "Horse"]
// const animals6 = animals.slice(-2);
// console.log(animals6); // tạo mảng lấy ra 2 phần tử ở cuối
// //["Elephant", "Monkey"]

// method Splice : Xóa hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "fish", "Lion", "bird"];
// // tạo ra mảng mới bắt đầu từ phần tử truyền vào
// const pets1 = pets.splice(2);
// console.log(pets1); // ["fish","Lion","bird"]
// // tạo ra mảng mới bắt đầu từ phần tử truyền vào và xóa các phần tử
// console.log(pets);
// // const pets2 = pets.splice(0,1);
// // console.log(pets2);
// // tạo ra mảng mới bắt đầu từ phần tử truyền vào và thay thế các phần tử
// const pets3 = pets.splice(0,1,"Tiger","Dragon");
// console.log(pets);
// console.log(pets3);

// method sort : sắp xếp các phần tử trong mảng theo tiêu chuẩn unocode-16

// const numbers = [1, 0, 100, 9, 200, 5];
// const sortNumbers = numbers.sort();
// console.log(sortNumbers);
// // sort(function());
// const sortNumbers2 = numbers.sort(function(a,b) {
//     if(a > b) return 1;
//     if(a < b) return -1;
// });
// console.log(sortNumbers2);
// // Arrow function
// const sortNumbers3 = numbers.sort((a,b) => a > b ? 1 : -1);
// console.log(sortNumbers3);

// //find : tìm ra phần tử đầu tiên trong mảng với điều kiện
// const numberRandom = [2, 4, 1, 463, 2, 5, 10];
// const myNumber = numberRandom.find((element) => element > 1);
// // nếu không có phần tử nào thỏa mãn điều kiện thì trả về undefined
// console.log(myNumber);
// //findIndex : tìm ra vị trí đầu tiên của phần tử trong mảng với điều kiện
// const myNumberIndex = numberRandom.findIndex((element) => element > 4)
// console.log(myNumberIndex);
// // nếu không tìm thấy sẽ trả về -1

// // map: trả về một mảng mới mà không làm thay đổi mảng cũ
// const numberSeries = [4, 3, 4, 3, 1, 6, 9];
// const numberSeriesDouble =  numberSeries.map((value, index) => value * 2);
// console.log(numberSeriesDouble);
// console.log(numberSeries);

// foreach: chỉ duyệt qua các phần tử trong mảng và không thể trả về cái gì(không thể return, thường dùng trong DOM)

//filter : lọc ra các phần tử theo điều kiện
// const listNumber = [3, 4, 6, 2, 6, 9];
// const myListNumber = listNumber.filter((value) => value % 3 == 0);
// console.log(myListNumber);

// //some : trả về true nếu có ít nhất 1 đk đúng , trả về false nếu tất cả đk đều không đúng
// const someNumber = listNumber.some((value) => value > 5);
// console.log(someNumber);

// //every : trả về true nếu tất cả đk đều đúng, trả về false nếu có một đk sai
// const everyNumber = listNumber.every((value) => value > 5);
// console.log(everyNumber);

// reduce : gom các phần tử trong mảng lại thành một
const listNumber = [2, 4, 4, 5, 1];
const totalListNumber = listNumber.reduce(function(a, b) {
    return a + b;
}, 0)
console.log(totalListNumber);
