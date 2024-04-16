// A) Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 34565457666n. // bigint


// B) Reference (Non primitive data type)

// Array, Objects, Functions

const heros = ["shakti man", "nagraj", "doga"];

let myObj = {
    name:"hitesh",
    age:22,
}

const myfunction(){
    console.log("Hello World");
}

console.log(typeof bigNumber);