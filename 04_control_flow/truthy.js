const userEmail = "h@hitesh.ai"
if(userEmail){
  console.log("got user email")
}else{
  console.log("don't have user email")
}


// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false'," ", [], {}, function(){}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
}

// Nullish Coalesing Operator (??): null undefined

let val1 
// val = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1)

// terniary operater

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")