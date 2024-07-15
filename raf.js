function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(10, 20, 30, 40)); // 100


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];


const mergedArray = [...array1, ...array2, ...array3]
console.log(mergedArray);




const name = "John";
const age = 30;

const person = {
    greet: function() {
        return `Hi, I'm ${name} and I'm ${age} years old.`;
    }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."


const fruits = ["apple", "banana", "cherry"];

for(const myFruits of fruits){
    console.log(myFruits)
}


const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for(let {name} of students){
    console.log(name)
  }

  10//
  const a = 5;
const b = 10;

// Your code here
const result = `The sum of ${a} and ${b} is 15`;
console.log(result); 