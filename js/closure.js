function CreateCounter() {
    let count = 0;
    return function increase() {
        console.log(count++);
    }
} // Khai báo môi trường thực thi

CreateCounter()(); // Tạo ra môi trường 1 và thực thi 
CreateCounter()(); // Tạo ra môi trường 2 và thực thi
CreateCounter()(); // Tạo ra môi trường 3 và thực thi
console.log("--------------------------")
let counter = CreateCounter();
counter();
counter();
counter();