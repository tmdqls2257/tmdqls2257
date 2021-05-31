// Don't give up

// 함수선언
function doSomething(){
    console.log('hello');
}

function _doSomething(add){
    console.log(add);
}

function add(a, b){
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething();

add(1, 2);

doSomething(add);

const result = add(1, 4);
console.log(result);
