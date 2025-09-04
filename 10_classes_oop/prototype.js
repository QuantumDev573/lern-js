// Prototype
// let name = "hello    ";
// let myChai = "chai   ";
// console.log(name.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower ={
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`)
  }
}

Object.prototype.Hello = function(){   // Adding new property
  console.log("Say Hello! all time");

}


Array.prototype.HeyHello = function(){
  console.log("Say Hey Hello");
}

// heroPower.Hello();
myHeros.Hello();
myHeros.HeyHello();
// heroPower.HeyHello();  // here is no power to the object because we create a prototype in a array

let anotherusername = "what is this     ";

String.prototype.trueLength = function(){
  console.log(this);
  console.log(`True length is: ${this.trim().length}`);
}

anotherusername.trueLength();

"hello     ".trueLength();