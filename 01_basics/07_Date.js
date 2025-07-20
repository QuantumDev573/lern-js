// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())


// let myCreatedDate = new Date(2023, 0, 3)
// let myCreatedDate = new Date(2023, 0, 3, 5, 3)
let myCreatedDate = new Date("2023-01-15")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimestamp = Date.now()

// console.log(myTimestamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

// console.log(`${newDate.getDay()} nad the time is ${newDate.getTime()}`)  // This is called string interpultion Method

newDate.toLocaleString('default', {
  weekday:"long"
})