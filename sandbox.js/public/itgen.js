// //iterator example
// function nameIterator(names){
//     let nextIndex = 0;
    
//     return{
//         next: function(){
//             return nextIndex < names.length ? 
//             {value: names[nextIndex++], done: false} :
//             {done: true};
//         }
//     };
// }

// //create names array
// const namesArray = ['jack', 'jill', 'john'];
// //init iterator and pass in names arrau
// const names = nameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

//generator example * makes it a generator
// function* sayNames(){
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());

//id creator
// function* createIds() {
//     let index = 0;
    
//     while(true){
//         yield index++;
//     }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);