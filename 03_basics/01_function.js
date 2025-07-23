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
console.log(loginUserMessage("Hello"))