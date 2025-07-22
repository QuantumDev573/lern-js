// object singleton

// const tinderUser = new Object() // creating object using singleton method

const tinderUser = {} // creating objects using literials method
tinderUser.id = "abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname:{
    userfullname: {
      firstname: "Ashwani",
      lastname: "Maurya"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
  1: "a",
  2: "b"
}
const obj2 = {
  3: "a",
  4: "b"
}

// console.log(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}  // it is known as object  spread
// console.log(obj3)

const users = [
  {
    id: 1,
    email: "hamilton@gmail.com"

  }
]

console.log(users[0].email);
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty("name"))