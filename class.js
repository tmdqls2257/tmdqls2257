'use strict';
// Object-oriendted programing
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - sysntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
  // constructor
  constructor(name, age){
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak(){
    console.log(`${this.name}: hello`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2.Getter and setters
class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age(){
    return this._age;
  }
  set age(value){
    // if value < 0{
    //   throw Error("Don't you even know your age?");
    // }
    // this._age = value;
    this._age = value < 0 ? 0 : value;//value가 0보다 작다면 0을 쓰고 아니면 value를 쓰겠다. 
  }
}

const user1 = new User('Steve', 'job' -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!

class Experiment{
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4.Static propertiesand methods
// Too soon!
class Article{
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);