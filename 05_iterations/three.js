// for of loop

// const arr = [1,2,3,4,5];
// for (const num of arr) {
//   console.log(num);
// }

const greeting = "Hello World"
for(const greet of greeting){
  console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('In', "india")
map.set('USA', "United state of America")


for (const [key, value] of map){  // Maps are iteratable using for of loop
  console.log(key,':-', value)
}

const myObject = {          // Objects are not iteratable using forof loop 
  'game1': "NFS",
  'game2': 'spiderman'
}
for(const [key, value] of myObject){
  console.log(key,':-', value)
}