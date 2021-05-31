'use strict';

// JavaScript is synchronous.
// Excute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);// 
console.log('3');
// Synchronous callback 즉각적으로 실행되는 Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 나중에 언제 실행될지 모르는 Asynchronous callback 
function printImmediately(print, timeout){
    setTimeout(print, timeout);
}
printImmediately(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage{
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else{
        onError(new Error('not found'));
      }
    }, 2000);
    }
    
    getRoles(user, onSuccess, onError){
      setTimeout( ()=> {
        if (user === 'ellie') {
          onSuccess({name: 'ellie', role: 'admin'});
        } else {
          onError(new Error('no access'));
        }
      }, 2000);
    }
    
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password,
  user => {userStorage.getRoles(
    user, 
    userWithRole => {
      alert(`Your ID is ${userWithRole.name}, you have a role ${userWithRole.role}`);
    },
    error => {console.log(error);}
    );},
  error => {console.log(error);}
  );
