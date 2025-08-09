// Immediately Invoked function Expressions (IIFE)
(function chai (){     // named IIFE
  console.log(`connect DB`)
})();                         // we use IIFE to avoid the pollution of the global scope

(() => {
  console.log(`DB connected two`)
})();

((name) => {
  console.log(`DB connected two ${name}`)
})("hello")