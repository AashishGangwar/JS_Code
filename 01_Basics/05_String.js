const name = "Aashish"
const repoCount = 50
console.log(name + repoCount);
console.log(`my name is ${name} and repo count is ${repoCount}`);


const gameName = new String("Gangwar")
console.log(gameName[0]);
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newStringOne = "   Akash"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "www.aashish%20gangwar.com"
console.log(url.replace('%20', '-'))

const myNew = "Aashish-Gangwar-Boss";
console.log(myNew.split('-'));
