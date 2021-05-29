'use strict';

// 1. String concatenation
console.log('my'+'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ellie's \n book");

// 2. Numeric operators
console.log(1 + 1);// add
console.log(1 - 1);// substract
console.log(1 / 1);// divide 몫
console.log(1 * 1);// multiply
console.log(1 ** 1);// exponentiation 나머지
console.log(1 % 1);// remainder

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
// preIncrement = center;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 6. logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or)
console.log(`or: ${value1 || value2 || check()}`);// 상대적으로 연산이 어려운 함수를 앞에 두지 말고 연산하기 쉬운 value를 앞에 둡니다.

function check(){
    for (let i = 0; i <10; i++){
        //wasting time
        console.log('😀');
    }
    return true;
}
//!(not)
console.log(!value1);//false를 출력함

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality. with type conversion 타입을 변형시킴
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 다른 타입이면 달라짐
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference 오브젝트는 저장될 때 reference의 형태로 저장된다.
const ellie1 = { name:'ellie'};
const ellie2 = { name:'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // reference가 다르기 때문에 false
console.log(ellie1 === ellie2);// reference가 다르기 때문에 false
console.log(ellie1 === ellie3);

// equality - puzzler
/*console.log(0 == flase);//true
console.log(0 === flase);//false
console.log('' == flase);//true
console.log('' === flase);//false
console.log(null == undefined);//true
console.log(null === undefined);//false*/

//8. Conditional operators:if
// if, else if, else
// const name = 'ellie';
// if (name = 'ellie'){
//     console.log('Welcome, Ellie!');
// } else if(name === 'coder') {
//     console.log('You are amazing color');
// } else {
//     console.log('unkown');
// }

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie'?'yes' : 'no');// name===ellie가 true이니 true이면 맞으면 (왼 : 오) :의 왼쪽을 아니면 :의 오른쪽을 실행 

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Chrome':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// bod code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop,body code is executed first,
// then check the condition.
// do를 먼저 진행하고  while로 검사를 진행한다.
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}


for(let i = 0; i < 11; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}
console.clear();
for(let i = 0; i <= 10; i++){
    if (i % 2 === 1){
        continue;
    }
    else if (i === 0){
        continue;
    }
    console.log(`${i}`);
}
for(let i = 0; i <= 10; i++){
    if(i === 8){
        break;
    }
    console.log(i);
}