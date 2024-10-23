// iife - immediately invoked function expression
// (function(){
//     console.log("Xin chao");
// })()

const app = (function() {
    const cars = [];
    return {
        add(car) {
            cars.push(car)
        },
        edit(car) {
            cars[index] = car;
        },
        remove(index) {
            cars.splice(index,1);
        }
    }
})()
console.log(app.add("ABC"));