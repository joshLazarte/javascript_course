//sets - store unique values of any type

const set1 = new Set();

//add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); //cannot add again

const set2 = new Set([1, true, 'String']);

// console.log(set1);
// console.log(set2);

//get size
// console.log(set1.size);

// //check for values
// console.log(set1.has(100)); //returns true
// console.log(set1.has(50 + 50)); //returns true also
// console.log(set1.has({name: 'John'})); //returns false reference value vs primitive type

//delete from set
//set1.delete(100);

//console.log(set1);

// //iterate through sets
// //for ...of
// for(let item of set1){
//     console.log(item);
// }

// //for each
// set1.forEach((value) => {
//     console.log(value);
// });

//convert into an array
const setArray = Array.from(set1);
console.log(setArray);
