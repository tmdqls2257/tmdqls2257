'use strict';

// Array

// 1.Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. looping over an array
// print all fruits
// 3-1 for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// 3-2 for of
for(let fruit of fruits){
    console.log(fruit);
}

// 3-3 forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry','peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// add an item to the beginning
fruits.unshift('strawberry','peach');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('strawberry','peach','lemon');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'grape','melon');
console.log(fruits);

// combine two arrays
const fruits2 = ['orange','watermelon'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.includes('grape'));
console.log(fruits.indexOf('coconut'));
console.log(fruits.includes('coconut'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

console.log(fruits.indexOf('apple'));
console.log(fruits.toString());
console.log(fruits.toLocaleString());
console.log(fruits.reverse());
console.log(fruits.slice(1,3));

console.log(fruits.join());
const fruit3 = '🍎, 🥝, 🍌, 🍒';
console.log(fruit3.toLocaleString());
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
