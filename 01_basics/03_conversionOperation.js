
let score = "33abc"

console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = true

let booleanLoggedIn = Number(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true, 0 => false
// "" => false
// "hello" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))


// Operations //



let value = 3
let negvalue = -value

// console.log(negvalue)
// console.log(2**3) // 2 to the power 3

// let str1 = "hello"
// let str2 = " Ashwani"

// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2) // 12
console.log("1" + 2 + 2) // 122
console.log(2 + 2 + "1") // 41

console.log(+true); // + use as conversion