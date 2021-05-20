//1. Use strict
// added in ES 5
// use this for Valine Javascript.
'use strict';
console.log('Hello World!');

//2.Variable
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name='hello';
    console.log(name);
    console.log(globalName);

}
console.log(name);
console.log(globalName);

/*var (don't ever use this!)
var hoisting (move declaration from bottom to top)
has no block scope*/
{
    console.log(age);
    age = 4;
    console.log(age);
    var age;
}

/*3. Contants 
favor immutable data type always for a few reasons:
- secutiry
- thread safety
- reduce human mistakes*/
const dayInweek = 7;
const maxNumber = 5;

// 4. Variable Types
// primitive, single item: Number, string, boolean, null, undefiedn, symbol
// Object, box container
// function, first-class function

const count = 17;//integer
const size = 17.1;//decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values:infinity, -infinity,
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bidInt (fairly new, don't use i t yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;//template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3<1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 너는 비어있는 값이야라고 선언하는 것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 선언은 되었지만 값이 정해지지 않은 것
let x = undefined; // let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 고유한 식별자가 필요하거나 동시 다발적으로 일어날 수 있는 코드에서 우선 순위를 주고 싶을 때 쓰이는 아이
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 동일한 boolean이여도 같은 symbol이 되지는 않습니다. 만약 동일한 symbol을 만들고 싶다면
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);// true
// symbol을 출력할 때는 항상 뒤에 .description을 사용하자
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5.Dynamics typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;// 5가 string으로 변하여 75가 나온다
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/ '2';//string이 number로 바뀌어 4가 나옵니다.
console.log(`value: ${text}, type: ${typeof text}`);

// object, real-life object, data structure
// ellie라는 object를 만들어 이름과 나이를 설정해주고
// ellie는 const이지만 그 안에 있는 name, age는 varible이기 때문에 변화 가능
const ellie = { name:'ellie', age:20};