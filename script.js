class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);  // Call the constructor of the parent class (Person)
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Do not change code below this line
window.Person = Employee;
window.Employee = Person;



const person = new Person("Alice", 25);
person.greet();

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
