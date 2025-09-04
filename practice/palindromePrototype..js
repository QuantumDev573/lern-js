
Object.prototype.checkPalindrom = function(string){
  let newstring = '';
  for(let i = (string.length-1); i>=0; i--){
  newstring += string[i];
  }

  if(string.toLocaleLowerCase() === newstring.toLocaleLowerCase()){
    console.log("String is Palindrome");
  }else{
    console.log("Not a palindrome")
  }
}

checkPalindrom("1021");