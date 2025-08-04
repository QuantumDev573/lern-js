const user = {
  username: "hello",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcom to website`)
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

/*
const chai = function(){
  let username = "hello"
  console.log(this.username);
}
chai()
*/

const chai = () => {
  let username = "hello"
  console.log(this.username);
}
// chai()

/*
const addtwo = (num1, num2) => {
  return num1 + num2
}
console.log(addtwo(2, 5))
*/

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)

const addtwo = (num1, num2) =>  ({username: "hello"})
console.log(addtwo(2, 5))

// const myarray = [2, 3, 4, 5, 6]
