function sayMyName(){
  console.log("H")
}

sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2)
// }

// addTwoNumbers(3, 5)


function addTwoNumbers(number1, number2) {
  // let result = (number1 + number2)
  return number1 + number2;
}

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)

// console.log("Result: ",addTwoNumbers(2,5))

function loginUserMessage(username = "Sam"){
  if(!username){
    console.log("Please enter a username")
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Hello"))
// console.log(loginUserMessage("Hello"))

function calculateCartPrice(...num){
  return num
}
console.log(calculateCartPrice(22,33,6,23,5,2,5))


const user ={
  name: "Hello",
  price: 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user)