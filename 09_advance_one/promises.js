const promiseOne = new Promise(function(resolve, reject){
  // Do an async task
  // DB calls, sryptography, networkcall
  setTimeout(function(){
    console.log("async task is complete")
    resolve();
  }, 1000)
})

promiseOne.then(function(){
  console.log("Promise Consumed")
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task Two")
    resolve();
  }, 1000)
}).then(function(){
  console.log("Async Two resolved")
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({userName: "chai", email:"chaiaur@code"});
  }, 1000)
})
promiseThree.then(function(user){
  console.log(user);
})

const promisefour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({userName: "Ashwani", password: 123})
    }else{
      reject('ERROR: SomTHING WENT WRONG')
    }
  }, 2000)
})
promisefour
.then((user) => {
  console.log(user);
  return user.userName;
})
.then((userName)=>{
  console.log(userName);
})
.catch((error)=>{
  console.log(error);
}).finally(() => console.log("The Promse is either resolve or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true;
      if(!error){
        resolve({userName: "javascript", password:123})
      }else{
        reject('ERROR: JS went Wrong')
      }
    }, 1000)
})
async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(response)
  }catch(error){
    console.log(error)
  }
}
consumePromiseFive()


// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//   }catch(error){
//     console.log(error)
//   }
// }
// getAllUsers()


fetch('https://api.github.com/users/hiteshchaudhari')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))