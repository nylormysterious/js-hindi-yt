//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
//null ka matlab nahi ki value 0 hai , null means empty
let userEmail;
// yaha iski value undefined hai
let userEmail=undefined;
// can write undefine di both ways line 11 and 13
 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n
//in  sab ko store kartne ke liye automatically js joh dtatyke use karega behind the secen voh bigint hi use karega



// Reference (Non primitive)

// Array, Objects, Functions
//Arrays
const heros = ["shaktiman", "naagraj", "doga"];
//Object:-curly becas ke andar objects hot, curly braces ke andar hum key value pair mei likhte hain
let myObj = {
    name: "hitesh",
    age: 22,
}

//fucntion ko bhi dec;are karne bahut tareeke
// abhi hum variable wala tareeka dekhte, fuction ko bhi hum js mei ariable ki tarah treat kar sakte hai
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
 
// https://262.ecma-international.org/5.1/#sec-11.4.3