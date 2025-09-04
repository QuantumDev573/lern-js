fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data.userId);
    console.log(data.title)
  })
  .catch(error => console.log(error))