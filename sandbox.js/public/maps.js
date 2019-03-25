//maps = key-value pairs - can use any type as key or value
const map1 = new Map();

//set keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){};
      
//set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// //get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// //count values in a map
// console.log(map1.size);

// //iterating through maps

//loop using for ...of to grt keys and values
// for(let[key, value] of map1){
//     console.log(`${key} = ${value}`);
// }

//iterate keys only
// for(let key of map1.keys()){
//     console.log(key);
// }

//iterate values only
// for(let value of map1.values()){
//     console.log(value);
// }

//using forEach
// map1.forEach(function(value, key){
//     console.log(`${key} = ${value}`);
// })

//convert set to array
//create an array of key value pairs
const keyValArray = Array.from(map1);
console.log(keyValArray);

//create array of the values
const valArray = Array.from(map1.values());
console.log(valArray);

//create array of the keys
const keyArray = Array.from(map1.keys());
console.log(keyArray);