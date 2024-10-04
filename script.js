class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`; // Updated format to match expected output
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`; // Make sure the format matches expected output
    }
}

window.Person = Person;
window.Employee = Employee;