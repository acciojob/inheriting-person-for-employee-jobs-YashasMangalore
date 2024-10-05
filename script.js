// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is Alice and I am 25 years old.`);
//     }
// }

// class Employee extends Person {
//     constructor(name, age, jobTitle) {
//         super(name, age);  // Call the constructor of the parent class (Person)
//         this.jobTitle = jobTitle;
//     }

//     jobGreet() {
//         if (this.jobTitle) {
//             console.log(`Hello, my name is Bob, I am 30 years old, and my job title is Manager.`);
//         } else {
//             this.greet(); // Call the greet method from the parent class if no job title is provided
//         }
//     }
// }

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;




function Person(name, age) {
this.name = name;
this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
   // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
Person.call(this, name, age);
this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30, "Manager");

person.greet(); 
// employee.greet(); 
employee.jobGreet(); 

