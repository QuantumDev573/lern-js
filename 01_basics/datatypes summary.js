// primitive 

// 7 types: String, Number, Boolen, Null, Undefined, 
    Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

// Reference (Non premitive)

// Array, Object, Function 

const heros = ["shaktiman", "naagraj", "doga"]

let myobj = {
  name: "HELLO",
  age: 52
}

const myFunction = function(){
  console.log("Hello World");
}


// ==============================

// Stack(Primitive), Heap(Non Premitive) (Memory)

let myName = "Hello" // when primitive gose in stack it gives copy of the variable

let objOne = {            // It is non primitive datatype it gose in Heap, and give original reference
  userName: "sfwehgo@",
  upi: "user@ypl"
}


