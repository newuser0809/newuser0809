// // object literal
// const objectLiteral = {};
// // object contructor
// const objectContructor = new Object();
// // example:
// const student = {
//   name: "Duyt trọng",
//   age: 18,
//   hi: function () {
//     console.log("hello world");
//   }, // method
// };

// // có 2 cách truy xuất giá trị trong object : dot notation và bracket notation
// //dot notation
// student.name = "Trọng";
// student.age = 21;
// student.address = "ND";
// student.hello = function he() {
//   console.log("hello");
// };

// // xóa một trường (key và value tương ứng)
// delete student.hi;
// // console.log(student.hi);
// //bracket notation
// student["last-name"] = "Duy";
// student["1"] = true;
// student["0"] = false
// console.log(student);
// for...in with object
// for(let key in student) {
//   console.log(`${key}:${student[key]}`);
// }

// các phương thức được định nghĩa sẵn trong Object

// // Object.keys(object) -> lấy ra các key của object đưa vào một mảng với kiểu dữ liệu là string
// const listKeys = Object.keys(student);
// console.log(listKeys);
// // Object.values(object) -> lấy ra các giá trị của object đưa vào một mảng với kiểu dữ liệu tương ứng
// const listValues = Object.values(student);
// console.log(listValues);
// // Object.entries(object) -> lấy ra cả key và value của object đưa vào mảng[["key1",value1],["key2",value2],["key3",value3]...]
// const listObject = Object.entries(student);
// console.log(listObject);

// // Object.assign(object) -> sao chép object vào object mới
// const newObject = {
//   male: true
// };
// const assignObject = Object.assign(student);
// console.log(assignObject);
// const as = {...student, ...newObject};
// console.log(as);

// //Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
// const cat =  {
//   name: "meme",
//   foot: 4
// }
// const newCat = Object.freeze(cat);
// cat.foot = 3;
// console.log(newCat);
// console.log(cat);

// //Object.seal(object) ->  có thể thay đổi giá trị nhưng không thể thêm, sửa, xóa.
// const car = {
//   name: "BMW",
//   cost: 5000
// }
// const newCar = Object.seal(car)
// newCar.cost = 4000;
// newCar.type = "vehicle";
// console.log(newCar);

// // clone nested object
//  const user = {
//   name: "Trọng",
//   school: {
//     name: "MM",
//     position: {
//       name: "student"
//     }
//   }
//  }
//  const newUser = JSON.parse(JSON.stringify(user))
//  newUser.school.name = "ND";
//  newUser.school.position.name = "teacher";
//  console.log(newUser);
//  console.log(user);

//// this keyword : truy xuất đến object gần nhất
const student = {
  name: "Trọng",
  age: 21,
  male: true,
  hi: function () {
    console.log(this);
    console.log(`Hello i am ${this.name}, i am ${this.age}, i am male`);
  },
  fullName: {
    name: "Good",
  },
};
// // student.hi()

// // Optional chaining
// console.log(student?.fullName?.name);
// ternary operator điều kiện ? đúng : sai

// Destructuring object
//c1:
// function myInfo (obj) {
//   console.log(obj.name, obj.age, obj.male);
// };
// const info = {
//   name: "Tr",
//   age: 21,
//   male: true
// };
// myInfo(info);
//c2:
function myInfo2 ({name, age, male}) {
  console.log(name, age, male);

};
const my = {
  male: true,
  name: "Tr",
  age: 21,
}
myInfo2(my)
console.log(my["age"]);