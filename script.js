
let shirtColor = "red";
shirtSize = "xxl";


let shirt = {
    color: "red",
    size:  "xxl",
// Method
    sayHello: function () {
        return "hiiii"
    }
}

console.log(shirt.sayHello());
// console.log(shirt['color']);

function sayHello () {
    return "Hello EveryOne"
}

console.log(sayHello());


// ? Malumotlar turlari
// Number
// boolean
// string
// underfined
// null
// object


let str1 = "bittali \\ 'qoshtirnoq'";
// bittali qoshtirnoq
// 012345678910

let str2 = 
'bektik orqali String yasash';

// ? String property
// console.log(str.length);

// ? String methods
charAt()
console.log(str.charAt(6));

// Slice()
let str = 'bittali qoshtirnoq sdfghjksdfghjk';
console.log(str[0]);
let slicedStr = str.slice(-10, -1)
console.log(slicedStr);

// Substring()
let newSub = str.substring(8, str[length-1])
console.log(newSub);

// substr()
let substrNew = str.substr(8, 5)
console.log(substrNew);

// toLowerCase()
console.log(str.toLowerCase());

// toUpperCase()
console.log(str.toUpperCase());

// concat
let a = "hello           ";
let b = "world           ";
let z = "war";
let x = a.concat(b, z);
console.log(a + b + z);

// trim()
console.log(a.length);
console.log(a.trim().length);

// repeat()
console.log(z.repeat(5));

// replace()
let word = "alik yaxshimisiz alik";
let wordOne = word.replace("alik", "salom");
let newAll = word.replaceAll("alik", "salom");
console.log(newAll);

// split()
let newArr = word.split(',')
console.log(newArr);
let arr = [{name: "Shaxzod"}, {name: "Daler"}, {name: "Amir"}];