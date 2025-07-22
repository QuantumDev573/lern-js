// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
  name : "Ashwani",
  "fullName": "Ashwani Maurya",
  [mySym] : "myKey1",  // syntax of using a symbol
  age : 18,
  email : "@google.com",
  isLoggedIn : false,
  lastLogingDays: ["Monday", "Saturday"]
}

// console.log(jsUser.isLoggedIn)
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])      // here we can acces the symbol using the [ ]


jsUser.email = "Ashwani@google.com"
console.log(jsUser)
Object.freeze(jsUser.email) // it is use to freeze the objct

jsUser.greeting = function(){
  console.log("Hello JS user");
}
jsUser.greeting2 = function(){
  console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


