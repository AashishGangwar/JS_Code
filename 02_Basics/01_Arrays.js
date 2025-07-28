const myArr = [1, 2, 4, 5, 6];
const Heroes = ["Marvel", "DC"];
const myArr2 = [8, 9, 10];
console.log(myArr[1]);

myArr.push(6)
myArr.push(7)
myArr.pop()

console.log(myArr);

myArr.unshift(9)
myArr.shift()


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

console.log("A  ", myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
