// // Person constructor
// //constructors start with capitol
// function Person(name, dob){
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const dif = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(dif);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     console.log(this.calculateAge());
// }

// const josh = new Person('Josh', '5-7-2013');

// // const josh = new Person('Josh', 5);
// // const jonWyatt = new Person('Jon Wyatt', 3);

//string constructor
// const name1 = 'jeff';
// const name2 = new String('jeff');
// name2.foo = 'bar';

// console.log(name2)
// console.log(typeof(name2))

// //number constructor
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);

// //boolean constructor
// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(typeof(bool2));

//function constructor
// const getSum1 = function(x, y){
//     return x+y;
// };

// const getSum2 = new Function('x', 'y', 'return x + y')

// console.log(getSum2(4,1));

// //object constructor
// const john1 = {
//     name: 'john'
// };

// const john2 = new Object({name: 'john'});

// console.log(john2);

// //array constructor

// const array1 = [0,1,2];
// const array2 = new Array([0,1,2]);

// console.log(array2);
// console.log(array1);

// //regular expression constructor
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);

// // Person constructor
// //constructors start with capitol
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// }

// //calculate age
// Person.prototype.calculateAge = function(){
//     const dif = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(dif);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// //get full name
// Person.prototype.getFullName = function(){
//     return this.firstName + ' ' + this.lastName;
// };

// //gets married
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// };

// const jon = new Person('Jon Wyatt', 'Lazarte', '3-16-2015');
// const josh = new Person('Josh', 'Lazarte', '5-7-2013');
// const ariana = new Person('Ariana', 'Quiroz', '9-21-93');

// console.log(jon.getFullName());
// console.log(josh.calculateAge());
// console.log(ariana);
// ariana.getsMarried('Lazarte');
// console.log(ariana.getFullName());

// console.log(ariana.hasOwnProperty('firstName'));
// console.log(ariana.hasOwnProperty('getFullName'));


// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function(){
//   return `Hello there, ${this.firstName} ${this.lastName}`;  
// };

// const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);
    
//     this.phone = phone;
//     this.membership = membership;
// }

// //inherit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// //make customer.prototype return customer
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'standard');

// console.log(customer1);

// //Customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there, ${this.firstName} ${this.lastName}. Welcome to our Company`; 
// }

// console.log(customer1.greeting());


// const personPrototypes = {
//     greeting: function(){
//         return `Hello there, ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName){
//          this.lastName = newLastName;
//     }
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson')

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());


//es6 classes(does the same thing)

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
    
//     greeting(){
//         return `Hello there, ${this.firstName} ${this.lastName}`;
//     }
    
//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
    
//     getsMarried(newLastName){
//         this.lastName = newLastName;
//     }
    
//     static addNumbers(x, y){
//         return x + y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '11-13-80');

// mary.getsMarried('Stevens');
// console.log(mary);

// console.log(Person.addNumbers(1,2));

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
    
//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }
// }

// class Customer extends Person {
//     constructor(firstName, lastName, phone, membership){
//         super(firstName, lastName);
        
//         this.phone = phone;
//         this.membership = membership;
//     }
    
//     static getMembershipCost() {
//         return 500;
//     }
// }

// const jon = new Customer('Jon Wyatt', 'Lazarte', '555-555-5555', 'standard');

// console.log(jon.greeting());

// console.log(Customer.getMembershipCost());



