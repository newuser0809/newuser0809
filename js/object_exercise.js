// //1. viết một function kiểm tra value có phải object hay không
// function isObject(value) {
//     if(typeof value === "object" && !Array.isArray(value) && value != null) {
//         return true;
//     }
//     return false;
// }
// console.log(isObject({}));

// //2.
// function convert(obj) {
//     if(!isObject(object)) return;
//     //c1
//     const covertArr = Object.entries(obj)
//     // console.log(covertArr);

//     // c2
//     // const value = Object.keys(obj).map((item) => [item, obj[item]]);
//     // return value;

//     //c3
//     let result = [];
//     for(let key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             result.push([key, obj[key]])
//         }
//     }
//     return result;
// }

// const user = {
//     name: "meme",
//     age: 18,
//     height: "1m7"
// }
// convert(user)


// //bt xóa key trong obj
// function without(obj, ...key) {
//     console.log(obj);
//     const newObj = {...obj};
//     key.forEach(item => {
//         delete newObj[item];
//     })
//     return newObj;
// };

// console.log(without({a:1, b:2, c:3}, "a", "b"));

//bt kiểm tra 2 obj có giống nhau không

function isEqualObj(obj1,obj2) {
    const keyObj1 = Object.keys(obj1);
    const keyObj2 = Object.keys(obj2);
    if(keyObj1.length !== keyObj2.length) return false;
    const isValue = keyObj1.every((key) => obj1[key] === obj2[key])
    return isValue;
}
console.log(isEqualObj({a:1}, {a:2}));
