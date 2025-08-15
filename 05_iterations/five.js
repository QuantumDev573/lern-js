const coding = ["js", "java", "python", "c++", "ruby"]
coding.forEach((val) => {
  console.log(val)
})


function printMe(iteam){
  console.log(iteam)
}

// coding.forEach(printMe)

/*
coding.forEach((iteam, index, arr) => {{
  console.log(iteam, index, arr)
}})

*/

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "javat",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach( (iteam, index) => {
  console.log(iteam.languageName)
})