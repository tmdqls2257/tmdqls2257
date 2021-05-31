// Callback Hell example
'use strict';

class UserStorage{
  loginUser(id, password){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else{
          reject(new Error('not found'));
        }
      }, 1000);
    });
    }
    
    getRoles(user){
      return new Promise((resolve, reject) => {
        setTimeout( ()=> {
          if (user === 'ellie') {
            resolve({name: 'ellie', role: 'admin'});
          } else {
            reject(new Error('no access'));
          }
        }, 2000);
      });
    }
    
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Your ID is ${user.name}, you have a role ${user.role}`))
.catch(console.log);