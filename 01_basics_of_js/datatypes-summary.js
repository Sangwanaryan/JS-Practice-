// Primitive and Non-Primitive

/*
    7 types of Primitive Data types : String , Number, Boolean, Null, Undefined, Symbol, BigInt
*/

const score = 100;
const scoreValue = 100.3;


const id = Symbol('123');

/*
    Refrence (Non Primitive) : Array, Objects, Functions

*/

var obj = {
    name : "Aryan",
    age : 32,

    gender : "male"
}

const myFunc = function()
{
    console.log("Hey");
    
}

console.log(typeof myFunc);
console.log(typeof id);
console.log(typeof scoreValue);
console.log(typeof obj);
console.log(obj.name);
console.log( obj.age);


myFunc();