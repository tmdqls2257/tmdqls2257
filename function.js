'use strict';
// Function
// fundamental building block in the program
// subprogram can be used multitple times
// performs a task or calculaties a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){// message is parameter
    console.log(message);
}
log('hello');

// 2. Parameters
// premitive parameters: passed by value 
// 메모리에 value가 저장되어 있기 때문에 value가 전달이 됨 
// object parameters: passed by reference
// object에 reference가 저장되어 reference가 전달
function changeName(obj){
    obj.name = 'coder';
}
// ellie라는 const를 정의한다음 seungbin이라는 object를 만들어서 할당해주면 object에 만들어진 reference가 메모리에 들어가게 되고
// 이 reference는 object를 가르키게 됩니다.
const ellie = { name: 'seungbin'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from){
    console.log(`${message}, ${from}`);
}
showMessage('Hi!');// from이 정의 되어 있지 않기 때문에 undifine으로 나타난다.

// 4. Rest parameters (added in ES6)
function printAll(...args){// 배열 형태를 전달 하게 됨
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(globalMessage);
    console.log(message);//local variable
}

// console.log(childMessage); //error
// return undefined; 리턴 타입이 없으면 return undefined가 들어가 있는 것과 같다.
printMessage();
// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}
// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
    // 조건이 맞지 않을 때는 빨리 return을하여 함수를 끝내는게 좋습니다.
}
// First-class function
// functions are treated like any other variable
// can be assigned treated like any other variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function experssion
// a function declaration can be called earlier than it is defiend. (hoisted)
// a fuction expression is created when the execution reaches it.
const print = function(){//함수에 이름이 없는것을 anonymous function 
    console.log('print');
};
print();// function을 print라는 변수에 집어 넣어서 사용하면 함수를 호출하였을 때 사용가능
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
    printYes();
    } else {
    printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions

const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint');
};

// 코드를 줄여주기 위해 사용
/*const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;*/
