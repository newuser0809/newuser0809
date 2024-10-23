// // Câu điều kiện if else
// const isRich = true;
// const myMoney = 1000;
// if (!isRich) {
//     console.log("I will buy IPHONE 15 Pro Max");
// } else if (myMoney > 10000000) {
//     console.log("I will buy IPHONE 8");
// } else {
//     console.log("I will save money");
// }

//// cách hiển thị các thông báo
// alert("Chào Anh Trọng");
// prompt("Nhập tên của bạn", "Trọng");
// confirm("Đây là Trọng phải không")

// Bài tập thực hành
// const yourAge = prompt("Nhập số tuổi của bạn","");
// if(Number(yourAge) >= 18) {
//     alert("Bạn đủ tuổi xem phim");
// } else {
//     alert("Bạn chưa đủ tuổi xem phim");
// }

// const a = prompt("Nhập số a", "");
// const b = prompt("Nhập số b", "");
// if(Number(a) > Number(b)) {
//     alert(`${a} > ${b}`);
// } else {
//     alert(`${b} > ${a}`);
// }

// câu điều kiện switch - case

// const subject = "small";
// switch(subject) {
//     case "literature":
//         console.log("I like to study literature");
//         break;
//     case "history":
//         console.log("I like to study history");
//         break;
//     case "math":
//         console.log("I like to study Math");
//         break;
//     default:
//         console.log("I don't like study");
// }
 

// ternary operator
// cach viet theo if

// const age = 132;
// let message = ""
// if(age >= 18) {
//     message = "You are adult";
// } else if (age < 10) {
//     message = "You are still a child";
// } else {
//     message = "You are  a young boy";
// }
// console.log(message);

// cach viet ternary operator
// const age = -1
// let message2 = 
//     age >= 150 
//         ? "You killed" 
//         : age >= 18 
//         ? "You are adult"
//         :age > 10
//         ? "You are still a child"
//         :age > 0 
//         ? "You are  a young boy"
//         : " This isn't age"
//     console.log(message2);

//Tìm số nguyên tố
let n;
function Prime(n) {
    let isPrime = false;
    for(let i = 0; i < n; ++i) {
        if(n % i === 0) {
            return isPrime;
        }
    }
    return !isPrime;
}
function printPrime(callback, n) {
    callback(n)
    if(!isPrime) {
        console.log(`${n} Đây là số nguyên tố`);
    } else {
        console.log(`${n} Đây không phải là số nguyên tố`);
    }
}
printPrime(isPrime,13);
