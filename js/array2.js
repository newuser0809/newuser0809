// // by value và by references
const num1 = 1;
const num2 = 1;
const array1 = [1, 2];
const array2 = [1, 2];
console.log(num1 === num2);
console.log(array1 === array2);


// JSON: Javascript Object Notation
// JSON.Stringify(): chuyển đổi dữ liệu sàng chuỗi JSON
// JSON.parse(): chuyển đổi dữ liệu từ chuỗi JSON sang kiểu dữ liệu ban đầu
// JSON.stringify() !== toString()


const array1Str = JSON.stringify(array1);
const array2Str = JSON.stringify(array2);
console.log(array1Str, array1);
console.log(array1Str === array2Str);
const array1Before = JSON.parse(array1Str);
console.log(array1Before);
console.log(array1Str === array1Before);



// // 2 Cách sao chép mảng 
// const arrayStr = ["a", "b", "c", "d"];
// const arrayStrSlice = arrayStr.slice();
// console.log(arrayStrSlice);
// // spread operator
// const arrayStrSpread = [...arrayStr];

// const arrayStrPop = arrayStr.pop()
// console.log(arrayStr);
// console.log(arrayStrSpread);


// // 2 cách nối các mảng lại với nhau
// const array1 = [1, 2];
// const array2 = [3, 4];
// const array3 = [5, 6];
// const mergeArray = array1.concat(array2, array3);
// console.log(mergeArray);
// const mergeArray2 = [...array1,...array2,...array3];
// console.log(mergeArray2);


// Destructuring
const animals = ["Lion", "Tiger", "Elephant", "Monkey", "Bear"];
const [animal1] = animals;
console.log(animal1);
console.log(typeof(animal1));
const [a, ...rest] = animals;
console.log(a, rest);