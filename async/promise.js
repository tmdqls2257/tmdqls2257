'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1.Producer
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('성공');
        reject(new Error('error'));
    }, 2000);
});

// 2. Consumers:then, catch, finally
promise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fetcNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetcNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handing

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chiken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
    });
const getcook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cooked`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .then(egg => getcook(egg))
    .then(meal => console.log(meal));

getHen()
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(getcook)
    .then(console.log)
    .catch(console.log('error'));
