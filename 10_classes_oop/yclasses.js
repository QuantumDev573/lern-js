// ES6

class User {
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword(){
    return `${this.password}abc`;
  }
  changeUserName(){
    return `${this.username.toUpperCase()}`
  }
}

const chai = new User("Hello", "Hello@123", 12345);
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// Behine the scene

function User(username, email, password){
   this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`;
}