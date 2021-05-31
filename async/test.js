class Userlogin{
  logindata(id, password){
    return new Promise((resolve, reject) => {
      if(
        (id === 'tmdqls2257' && password === 'chl135') ||
        (id === 'tmdqls3344' && password === 'chl135')
      ){
        resolve(id);
      }
      else{
        reject(new Error('not found'));
      }
    });
  }

  getRole(user){
    return new Promise((resolve, reject) => {
      if((user === 'tmdqls2257') || (user === 'tmdqls3344')){
        resolve({name: `${user}`, role: 'admin'});
      } else{
        reject(new Error('no access'));
      }
    });
  }
}

const userlogin = new Userlogin();
const id = prompt('Enter  your ID');
const password = prompt('Enter your password');

userlogin.logindata(id, password)
.then(userlogin.getRole)
.then(user => alert(`Your Id is ${user.name}, your have a role ${user.role}`))
.catch(console.log);