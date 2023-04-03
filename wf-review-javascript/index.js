
// make array
const array = ["jhon","aliando",50,1.72,"alex"];

// make array without data
const arraydua =[];

// add data

arraydua[0] = 12;
arraydua[1] = 123;
arraydua[2] = 21;
arraydua[4] = 12;
arraydua[5] = "joni";

// push array 
arraydua.push(1000);

// make set data like array but can't insert duplicate data
const notDuplicateData = new Set();

notDuplicateData.add(12);
notDuplicateData.add(50);
notDuplicateData.add(50);

console.log(arraydua);

// make map like array but using key value

const myMap = new Map([['jatim','surabaya'],['jateng','jogjakarta'],['jabar','bogor']])

// make empty map

let myMyMap = new Map();

// add data to empty map

myMyMap.set('my','mine');
myMyMap.set('mymy','minemine');


// acess map data example

console.log(myMap.get('jatim'));
console.log(myMap.get('bogor'));

console.log(myMyMap);
console.log(myMyMap.get('my'));




