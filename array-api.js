'use strict'

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(fruits);
    console.log(result);

  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2);
    console.log(result);
  }
  
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
  
  // Q5. find a student with the score 90
  {
    //   const result = students.find(function(student, index) {
    //     return student.score === 90;
    //   });
    //   console.log(result);
    const result = students.find((student, index) =>  student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student, name) => student.enrolled === true);
      console.log(result);

  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
    console.log(result);
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
    console.log(!true);
  }
  
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) =>{
        console.log(prev);
        console.log(curr);
        return prev + curr.score;//curr값이 다음 prev값이 됨
    }, 0);// 0부터 시작
    console.log('------');

    const result1 = students.reduceRight((prev, curr) =>{
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students.map((student) => student.score).join();
    const result1 = students.map((student) => student.score).toString();
    const result2 = students.map((student) => student.score).toLocaleString();
    console.log(result);
    console.log(result1);
    console.log(result2);
    const result3 = students.map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result3);
    
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students.map((student) => student.score).sort().join();
    //   점수가 큰걸 원한다면 sort((a,b) => b-a) 
      console.log(result);
  }