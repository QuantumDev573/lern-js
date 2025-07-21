const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[0]) // during copy it create shallow copy(direct reference like stack memory)
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // removes last value of the array

// myArr.unshift(9) // add to the starting by shifting other values
// myArr.shift()

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(4))

const newArr = myArr.join()

console.log(newArr)
console.log(typeof newArr)


// Slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1, 3)
console.log("c ",myArr)
console.log(myn2)

