class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        if (this.jobTitle) {
            // If jobTitle exists, print job greet message
            console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
        } else {
            // Otherwise, print normal greet message
            console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
        }
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);  // Call the constructor of the parent class (Person)
        this.jobTitle = jobTitle;
    }

    // Optional: If the tests expect to use `greet` directly, you don't need to override it here
    // If needed, you can add a jobGreet() function here, but `greet` handles both cases now
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
