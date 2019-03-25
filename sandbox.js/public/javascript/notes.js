const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';
        
// template strigs(ES6)

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>
`;

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

document.body.innerHTML = html;    


const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
        
        
let val;

val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
val = numbers[0];

numbers[2] = 100;
val = numbers.indexOf(36);

mutating arrays
numbers.push(250);
// add to front
numbers.unshift(120);
//take from end
numbers.pop();
// take from front
numbers.shift();
// splice values
numbers.splice(1, 3);
//reverse
numbers.reverse();


concatenate array 
val = numbers.concat(numbers2);
sort
val = fruit.sort();
val = numbers.sort();

//use compare function
val = numbers.sort(function(x, y){
    return x-y;
});

//reverse sort
val = numbers.sort(function(x, y){
    return y-x;
});

find
function over50(num) {
    return num > 50;
}


val = numbers.find(over50);



console.log(numbers);
console.log(val);

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
      city: 'Miami',
      state: 'Florida'
  },
  getBirthYear: function() {
      return 2017 - this.age;
  } 
};

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.hobbies;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},    
    {name: 'Mike', age: 23},    
    {name: 'Nancy', age: 40}    
];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}


let val;
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

const id = 100;

if(id == 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}


if(id !== 101) {
    console.log('correct');
} else {
    console.log('incorrect');
}

if(typeof id !== 'undefined') {
    console.log(`the id is ${id}`);
} else {
    console.log('NO ID');
}

typeof id !== 'undefined' ? console.log(`the id is ${id}`) : console.log("no id");

const name = 'Steve';
const age = 25;

if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}


if(age < 16 || age > 65) {
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// ternary opperator
console.log(id === 100 ? 'correct' : 'incorrect');

// without braces 

if(id === 100)
    console.log('correct');
else
    console.log("incorrect");

const color = 'yellow';

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default :
        console.log('color is not red or blue');
}

let day;

switch(new Date().getDay()){
    case 0 :
        day = 'sunday';
        break;
    case 1 :
        day = 'monday';
        break;
    case 2 :
        day = 'tuesday';
        break;
    case 3 :
        day = 'wednesday';
        break;
    case 4 :
        day = 'thursday';
        break;
    case 5 :
        day = 'friday';
        break;
    case 6 :
        day = 'saturday';
        break;    
} 

console.log(`today is ${day}`)


function declarations

function greet(firstName = 'John', lastName = ' Doe') {
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // console.log('hello');
    return 'hello ' + firstName + lastName;
}

console.log(greet('bob', ' ross'));

function expressions

const square = function(x = 3){
    return x * x;
};

console.log(square());

iife

(function(){
    console.log('IIFE ran');
})();

(function(name){
    console.log('hello ' + name);
})('Josh');

property methods

const todo = {
    add: function(){
        console.log('add todo')
    },
    edit: function(id){
        console.log(`edit todo ${id}`)
    }
};

todo.delete = function() {
    console.log('delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();


  for loops
 for(let i = 0; i < 10; i++) {
     if(i === 2) {
         console.log('2 is my favorite number');
         continue;
     }
     
     if(i === 5){
         console.log('stop the loop');
         break;
     }
     
     console.log('number ' + i);
 }


while loops

let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++;
}

do while

let i = 100;

do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

map
const users = [
    {id: 1, name: 'John'},    
    {id: 2, name: 'Sara'},    
    {id: 3, name: 'Karen'},    
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: '40'
};

for(let x in user){
    console.log(x);
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

window methods / objects / properties
console
alert
 prompt
 
 const input = prompt();
 
 alert(input);

confirm
if(confirm('Are you sure?')){
    console.log('yes');
} else {
    console.log('no');
}

properties

let val;

//outer height and width

val = window.outerHeight;
val = window.outerWidth;

//inner height and width

val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


// //redirect
// window.location.href = 'http://google.com';

// //reload
// window.location.reload();

// HISTORY object

// window.history.go(-2);

// val = window.history.length;

//navigator object

val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);


global scope
var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('function scope ', a, b, c);
};

test();

if(true){
    // block scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('if scope ', a, b, c);
}
//a is hoisted from block to global scope due to var`
for(let a = 0; a < 10; a++){
    console.log(`loop: ${a}`)
}


console.log('global scope: ', a, b, c);

// convert html collection to an array
// and query selector options
let lis = document.getElementsByTagName('li');
let lis2 = document.querySelectorAll('li');
let lis3 = document.querySelector('#id');
let lis4 = document.querySelectorAll('.class');

//remeber this
lis = Array.from(lis);

// query selector all is different. returns node list vs html collection
// node lists have array methods available to them

// when you get .childNodes, you get a nodelist!
// .children gives only elements
// but with text nodes
// text nodes are line breaks type = 3
// element type = 3
// comment type = 8

// .firstElemntChild will skip text nodes!
// and .nextElementSibling
// .previousElementSibling is a thing too

// replace child

// get parent > create variable for current element > create variable for new
// element and create element > run parentVar.replaceChild(newElement, oldElement);

// .remove() is a method
// element.remove()
// element.removeChild(childElement)

// add event listener gives acces to event object, with methods

// mouse events:
// 'click'
// 'dblclick'
// 'mousedown'
// 'mouseup'
// 'mouseenter'
// 'mouseleave'
// 'mouseover'
// 'mouseout'
// 'mousemove' - lots of cool stuff with e.offsetX and e.offsetY

// other events:
// 'submit'
// use e.preventDefault();
// 'keydown'
// e.target.value will display what you type
// 'keyup'
// 'keypress'
// 'focus'
// 'blur'
// 'cut'
// 'paste'
// 'input'
// 'onchange' || 'change'

// event bubbling and delegation

// bubbling: when an event listener is added to an element, if there is also an event listener
// with the same type on it's parent, then both events will be triggered

// delegation: event is put on parent, then logic is used to select which child to put
// event on

document.body.addEventListener('click', functionName);

function functionName() {
  if(e.target.classList.contains('class-i-want')){
     do what i want 
  }
}

// Local Storage API

// add to local or session, remove, get, and clear all
localStorage.setItem('name', 'John');
sessionStorage.setItem('name', 'Beth');

localStorage.removeItem('name');

localStorage.getItem('name');

localStorage.clear();


// Can only store 1 at a time, so create array and turn into a string

// more on this to follow, uses JSON.parse() and JSON.stringify()









