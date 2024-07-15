
//1
// need help for understand







  //2

  function greet(name, greeting = "Hello") {
    if (greeting === undefined) {
        greeting = "Hello";
    }
    
    if (name !== undefined) {
        return `${greeting}, ${name}!`;
    } else {
        return `${greeting}!`;
    }
}



//3

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5



//4

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];


const mergedArray = [...array1, ...array2, ...array3]
console.log(mergedArray); //output: // [1, 2, 3, 4, 5, 6, 7, 8, 9]

 //5
const name = "John";
const age = 30;

const person = {
    greet: function() {
        return `Hi, I'm ${name} and I'm ${age} years old.`;
    }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."


//6

const fruits = ["apple", "banana", "cherry"];

for(const myFruits of fruits){
    console.log(myFruits)
}


//7

const myName = "Alice"; 
const myAge = 25; 
 const message = `My name is ${myName} and I am ${myAge} years old.`; 
 console.log(message); // "My name is Alice and I am 25 years old."




8//

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for(let {name} of students){
    console.log(name)
  }










  9//
//need help for understand

















  10//
  const a = 5;
const b = 10;

// Your code here
const result = `The sum of ${a} and ${b} is 15`;
console.log(result); // "The sum of 5 and 10 is 15."