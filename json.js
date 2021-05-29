// JSON
// JaveScript object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);//boolean타입도 가능
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    }// jump라는 함수는 object에 있는 데이터가 아니기 때문에 JSON에 포함되지 않습니다.
};

json = JSON.stringify(rabit);
console.log(json);

json = JSON.stringify(rabit, ['name']);
console.log(json);

json = JSON.stringify(rabit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; //key의 값이 name이라면 ellie로 바꿔줘 아니면 value를 return 해줘
});
console.log(json);
// 2. JSON to Object
// pare(json)
console.clear();
json = JSON.stringify(rabit);
const obj = JSON.parse(json);
console.log(obj);
rabit.jump();
// obj.jump();

console.log(rabit.birthDate.getDate());

console.clear();
let a = 3;

// switch (a) {
//     case 4:
//         alert('계산이 틀립니다!');
//         break;
//     case 3:
//     case 5:
//         alert('계산이 틀립니다!');
//         alert('초등학교를 다시 다니시는게 어떨까요?');
//         break;

    
// }

let user = {
    name: "John",
    age: 30,

    toString(){
        return `{name: '${this.name}', age: ${this.age}}`;
    }
}
alert(user);