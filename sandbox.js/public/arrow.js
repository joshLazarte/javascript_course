// const sayHello = function(){
//     alert('hello');
// };

// const sayHello = () => {
//     alert('hello');
// };

//one line function does not need braces
// const sayHello = () => alert('hello');

//one line returns
// const sayHello = () => 'Hello';

// return object
// const sayHello = () => ({ msg: 'Hello'});

//single param does not need parenthesis
// const sayHello = name => alert(`hello ${name}`);

//multiple params need parenthesis
// const sayHello = (firstName, lastName) => alert(`hello ${firstName} ${lastName}`);

// sayHello('Josh', 'Lazarte');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//     return name.length;
// })

const nameLengths = users.map(name => name.length);

alert(nameLengths);