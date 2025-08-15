const myObject = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift: 'swift by apple'
}


// for in loop can use for object iteration

for(const key in myObject){
  console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programing = ["js", "c++", "ruby", "python"]
for(const key in programing){
  console.log(programing[key])
}