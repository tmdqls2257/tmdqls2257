// objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly objects in JavaScript are instance of Object
// object = { key: value };

// 1.Literals and properties
const obj1 = {};// 'object literal' syntax
const obj2 = new Object();// 'object constructor' syntax

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age:4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed  properties
// key  should be  always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');
