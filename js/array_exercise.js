// // 1. Đảo ngược một chuỗi
// // VD: "Trong is name My" -> "My name is Trong"
// // cách 1:
// // const myName = function(str) {
// //     if(!str) return null;
// //     const splitMyName = str.split(" ");
// //     const reverseMyName = splitMyName.reverse();
// //     const joinMyName = reverseMyName.join(" ");
// //     return joinMyName;
// // }
// // console.log(myName("Trong is name My"));
// // cách 2:
// const yourName = (str) => str.split(" ").reverse().join(" ") ? str : null;
// console.log(yourName(""));

// // Đảo chuỗi sau "uoy evol i" -> "i love you"
// const myFriend = function(str) {
//     if(!str) return null;
//     const talkWithMe =
//     str.split(" ")
//        .map((element) => element.split("").reverse().join(""))
//        .reverse()
//        .join(" ")
//     return talkWithMe;
// }
// console.log(myFriend("uoy evol i"));

// //3. In hoa các chữ cái đầu của chuối sau "nguyen duy trong" -> "Nguyen Duy Trong"
// function capitalize(word = "") {
//     if(word.length === 0) return 0;
//     const firstWord = word.toLowerCase().charAt(0).toUpperCase();
//     const otherWord = word.toLowerCase().slice(1);
//     return`${firstWord}${otherWord}`;
// }
// function capitalizeStr(str) {
//     if(!str) return null;
//     const result =
//         str.split(" ")
//            .map(capitalize)
//            .join(" ")
//     return result;
// }
// console.log(capitalizeStr("nguyen duy trong"));

// //1 cho 1 mảng gồm nhiều giá trị [1, 100, false, null, "trong", undefined, [1, 2, 3]]. Viết chương trình loại bỏ các giá trị falsy ra khỏi mảng, chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là : 0 , null, undefined, false,"", NaN.

// const array = [1, 100, false, null, "trong", undefined, [1, 2, 3]];
// const truthyarray = array.filter(Boolean)
// console.log(truthyarray);

// //2. cho 1 mảng phức tạp [[1,2,3,[false,null],[1,5,6,["javascript"]],[88,66],[90]]] và kết quả muốn in ra là
// // [1,2,3,false,null,1,5,6,"javascript",88,66,90]
// const complexArray = [[1,2,3,[false,null],[1,5,6,["javascript"]],[88,66],[90]]];
// const result = complexArray.flat(10)
// console.log(result);

// //3. Đảo ngược số nguyên . ví dụ 1234 -> 4321, -567 -> 765
// function reverseNumber(number) {
//     const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number)
//     console.log(value);
// };
// reverseNumber(-4321);
// reverseNumber(1234);

// //4. Viết chương trình cí tên fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 tới số nguyên đó rồi kiểm tra nếu số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
// function fizzBuzz(number) {
//     for(let i = 1; i <= number; i++) {
//         if (i % 2 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Buzz");
//         } else if (i % 2 === 0 ) {
//             console.log("Fizz");
//         }
//     }
// }
// fizzBuzz(15)

// //5. cho 1 chuỗi bất kỳ, đếm số lượng ký tự 'vowels' trong chuỗi.
// // vowels là các ký tự u, e, o, a, i.
// function countVowels(string) {
//     let count = 0;
//     const character = "ueoai"
//     for(let c of string.toLowerCase()) {
//         if(character.includes(c)) {
//             count ++;
//         }
//     }
//     console.log(count);
// }
// countVowels("EVONDEV");

// //6. Cho 1 mảng các giá trị [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,5,7,6]
// const listArr = [1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6];
// function listUnique(arr) {
//     let result = [];
//     if(!Array.isArray(arr)) return result;
//     for(let i = 0; i < arr.length; i++) {
//         if(!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// } 

// console.log(listUnique(listArr));


//7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. ví dụ ([1,2,3,4,5],2)->[[1,2],[3,4],[5]]
function splitArray(arr,number) {
    let result = [];
    for(let i = 0; i < arr.length; i = i + number ) {
        result.push(arr.slice(i,i+number))
    }
    return result;
}
console.log(splitArray([1,2,3,4,5,6,7,8,9,10],3));