const now = new Date();
// console.log(now);
// //Timestamp : now.getTime()
// console.log(new Date(0));
// console.log(now.getTime());
// console.log(new Date(1692625668147));
// console.log(new Date(2023, 7, 21, 13,47,48));
// const birthday = new Date(2002, 8, 9, 23, 23, 23)
// // in ra năm sinh nhật
// console.log(birthday.getFullYear());
// // in ra tháng sinh nhật 0->11
// console.log(birthday.getMonth());
// // in ra ngày sinh nhật 1->31
// console.log(birthday.getDate());
// // in ra thứ sinh 0:chủ nhật -> 6:thứ bảy
// console.log(birthday.getDay());
// // in ra giờ 0->23
// console.log(birthday.getHours());
// //in ra phút
// console.log(birthday.getMinutes());
// //in ra giây 0->59
// console.log(birthday.getSeconds());
// // in ra mili giây 0->999
// console.log(birthday.getMilliseconds());
// // in ra Time Stamp
// console.log(birthday.getTime());
// console.log(`My birthday ${birthday}`);
// birthday.setFullYear(2023);
// birthday.setMonth(8);
// birthday.setDate(21);
// birthday.setHours(23);
// birthday.setMinutes(40);
// console.log(`My birthday after update ${birthday}`);
// Date String
// console.log(now.toUTCString()); //Tue, 22 Aug 2023 03:51:24 GMT
// console.log(now.toDateString()); //Tue Aug 22 2023
// console.log(now.toISOString()); //2023-08-22T03:51:47.611Z
// console.log(now.toLocaleDateString()); //22/8/2023
// console.log(now.toLocaleString()); //10:52:14 22/8/2023
// console.log(now.toString()); //Tue Aug 22 2023 10:52:21 GMT+0700 (Giờ Đông Dương)

//Bài tập thực hành
// // Input: Tue Aug 22 2023 11:00:19 GMT+0700 (Giờ Đông Dương)
// //Output: 22/08/2023
// const myTime = new Date("Tue Aug 22 2023 11:00:19 GMT+0700 (Giờ Đông Dương)")
// const myYear = myTime.getFullYear(); //2023
// const myMonth = myTime.getMonth() + 1; //8
// const myDate = myTime.getDate(); //22
// const fixMonth = myMonth < 10 ? "0" : "";
// console.log(`${myDate}//${fixMonth}${myMonth}//${myYear}`);
// 1. Viết chương trình nhập vào năm sinh và sinh ra số tuổi
// function getAge(year) {
//     if(typeof year !== "number") return 0;
//     const now = new Date();
//     const currentYear = now.getFullYear();
//     return currentYear - year;
// }
// const yourAge = getAge(2002);
// console.log(`Năm nay bạn ${yourAge} tuổi`);
// //2. Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào.
// // ví dụ thời gian làm bài 30 phút nếu chạy về 0 thì thông báo đã hết thời gian
// function countdown(minutes = 0) {
//     let count = 0;
//     seconds = minutes * 10;
//     let run = setInterval(() => {
//         count += 1;
//         console.log(count);
//         if(count === seconds) {
//             clearInterval(run);
//             console.log("The End");
//         }
//     } ,1000)
// }
// countdown(1);
//3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại
// // ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online '3 phút trước', '3 ngày trước',...
// function timeSince(time) {
//   const now = new Date();
//   const yourTime = new Date(time);
//   const seconds = Math.floor((now.getTime() - yourTime.getTime()) / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(seconds / (60 * 60));
//   let day = Math.floor(seconds / (60 * 60 * 24));
//   let month = Math.floor(seconds / (60 * 60 * 24 * 31));
//   let year = Math.floor(seconds / (60 * 60 * 24 * 31 * 12));
//   if(seconds < 60) {
//     console.log(`offline ${seconds} giây trước`);
//   } else if(seconds < 60 * 60) {
//     console.log(`offline ${minutes} phút trước`);
//   } else if (seconds < 60 * 60 * 24) {
//     console.log(`offline ${hours} giờ trước`);
//   } else if(seconds < 60 * 60 * 24 * 31) {
//     console.log(`offline ${day} ngày trước`);
//   }else if(seconds < 60 * 60 * 24 * 31 * 12) {
//     console.log(`offline ${month} tháng trước`);
//   } else {
//     console.log(`offline ${year} năm trước`);
//   }
// }
// console.log(now);
// timeSince("Fri Aug 22 2023 2:50:5 GMT+0700 (Giờ Đông Dương)");
