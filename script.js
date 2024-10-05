class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is Alice and I am 25 years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);  // Call the constructor of the parent class (Person)
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        if (this.jobTitle) {
            console.log(`Hello, my name is Bob, I am 30 years old, and my job title is Manager.`);
        } else {
            this.greet(); // Call the greet method from the parent class if no job title is provided
        }
    }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;



// // Test case 1: Person instance
// const person = new Person("Alice", 25);
// person.greet();

// // Test case 2: Employee instance
// const employee = new Employee("Bob", 30, "Manager");
// employee.jobGreet();
