let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23);
console.log(myCreatedDate1);
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2);
let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3);
let myCreatedDate4 = new Date("01-04-2023");
console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());

console.log(Math.floor(Date))