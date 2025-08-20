## Projects related to DOM

## Solution Code

## project 1

```javascript
console.log("hello")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")


buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e){
    console.log(e)
  console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```

## project2 
```javascript

const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.HTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //Show the result
    let ans ;
    if(bmi < 18.6){
       ans = "under weight"
    }else if(bmi >= 18.6 && bmi < 24.9){
       ans = "Normal range"
    }else{
       ans = "over weight"
    }
    results.innerHTML = `<span>${bmi} \n ${ans}</span`
  }

})
```