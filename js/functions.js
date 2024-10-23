// Cú pháp (Syntax)
// Tham số (parameters)
// Đối số (arguments)
// gọi function (invoke function)

// function declaration
// // Tính tổng hai số a và b
// function sum(a = 12,b = 10) {
//     return a + b;
// }
// console.log(sum());;

// const sum2 = function add(a,b) {
//     return a + b;
// }
// function average(x, y, fn) {
//     return fn(x,y) / 2;
// }
// console.log(average(200,300,sum2));

// // anonymous function (function expression) Không bị hoisting
// const fruitList = function () {
//     console.log("apple, banana, orange, grape");
// };

// fruitList();

// //IIFE (immediately invoked function execution)
// (function () {
//     console.log("This is IIFE");
// })();

//Scope
// Global scope,  function scope, Block scope

// let myName = "Duy Trong" // Global scope
// console.log(myName);

// function yourName() {
//     let nameOfYou = "No Name" //function Scope
//     console.log(nameOfYou);
// }
// yourName();
// if(1 < 2) {
//     let message = "Hello Trong" // Block scope
//     console.log(message);
// }


// // Closure

// function hi(message) {
//     function hello(name) {
//        console.log(`${message} ${name}`); 
//     }
//     return hello;
// }
// let xinChao = hi("Welcome to Bình Nguyên Vô Tận");
// xinChao("Trọng")

// Bài tập thực hành
// 1. Viết hàm so sánh 2 số a,b tìm ra số lớn hơn
function compare(a = 0, b = 0) {
    if(typeof a !== "number" || typeof b !== "number" ) {
       console.log("Đây không phải số");
       return 0;
    }
        return Math.max(a,b); 
}


// 2. In hoa chữ cái đầu trong chữ ví dụ: tuan -> Tuan
// function capitalize(word = "") {
//     if(word.length === 0) {
//         return 0;
//     }
//     let firstWord = word.toLowerCase().charAt(0).toUpperCase();
//     // toLowerCase: chuyển vể viết thường
//     // toUpperCase: chuyển vể viết hoa
//     //charAt: lấy ra 1 vị trí trong chuỗi n phần tử bắt đầu từ 0 -> n-1
//     let otherWord = word.toLowerCase().slice(1);
//     // slice: lấy ra chuỗi phần tử
//     return `${firstWord}${otherWord}`;
// }
// console.log(capitalize("duy trong"));

// // 3. Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
// function useCallBack(a,b,callback) {
//     return callback(a,b);
// }
// console.log(useCallBack(3,6,compare));