for(let i = 0; i<=10; i++){
  // console.log(i);
  if(i == 5){
   //console.log("Five is best")
  }
}

for(let i =1; i<=10; i++){
  // console.log(`Outer loop value: ${i}`)
  for(let j = 1; j<=10; j++){
    // console.log(`inner loop value ${j} and inner loop value ${i}`)
    // console.log(i +" * "+ j + ' = ' + i*j)

  }
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length)
for(let i =0; i<myArray.length; i++){
  const element = myArray[i]
  console.log(element)
}

//break & continue

// for (let index = 1; index < 20; index++) {
//   if(index == 5){
//     console.log(`deceted ${index}`)
//     break;
//   }
//   console.log(`Value of i is ${index}`);
  
// }




for (let index = 1; index < 20; index++) {
  if(index == 5){
    console.log(`deceted ${index}`)
    continue;
  }
  console.log(`Value of i is ${index}`);
  
}