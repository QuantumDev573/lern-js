const myNumbers = [1,2,3]

// const myTotal = myNumbers.reduce(function(acc, currval) {
//   console.log(`acc: ${acc}, currval: ${currval}`)
//   return acc + currval
// }, 0);


const myTotal = myNumbers.reduce((acc, curr) =>  acc + curr ,0)  // there is a accumalator , currentvalue and initial value exist like 0 is initial accumalator value

console.log(myTotal);


const shoppingCart = [
  {
    iteamName: "js",
    price: 2999
  },
  {
    iteamName: "python",
    price: 999
  },
  {
    iteamName: "mobiledev",
    price: 5999
  },
  {
    iteamName: "data science",
    price: 12999
  },
]

const priceToPay = shoppingCart.reduce( (acc,iteam) => acc + iteam.price, 0)
console.log(priceToPay)