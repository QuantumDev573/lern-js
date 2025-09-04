const User = {
  _email: 'H@hc.com',
  _password: '123',


  get email(){
    return this._email.toLocaleUpperCase();
  },

  set email(value){
    this._email = value;
  }
}
const tea = Object.create(User)
console.log(tea.email);