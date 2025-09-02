const user ={
  userName: "hello",
  loginCount: 8,
  signedIn: true,

  getUserDetail:  function(){
    console.log(this.userName)
    console.log(this)
  }
}
// console.log(user.userName)
// console.log(user.getUserDetail())


function User(userName, logInCount, isLoggedIn){
  this.userName = userName;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;

  return this
}

const userOne = new User("Hitesh", 12, true)
const UserTwo = new User("hello", 12, two)
console.log(userOne)