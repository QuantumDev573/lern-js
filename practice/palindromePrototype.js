
Object.prototype.checkPalindrom = function(){
  let newstring = '';
  for(let i = (this.length-1); i>=0; i--){
  newstring += this[i];
  }

  if(this.toLocaleLowerCase() === newstring.toLocaleLowerCase()){
    console.log("String is Palindrome");
  }else{
    console.log("Not a palindrome")
  }
}

"Hello".checkPalindrom();