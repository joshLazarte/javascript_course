//basic structure of module patter

// (function(){
//     //declare private vars and functions
    
//     return {
//         //declare public variables and functions
        
//     };
// })();

//standard module pattern
// const UICtrl = (function(){
//     let text = 'Hello World';
    
//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }
    
//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     };
// })();

// UICtrl.callChangeText();

//UICtrl.changeText(); // gets an error becuae you can't access change text

//revealing module pattern
const itemCtrl = (function(){
    let data = [];
    
    function add(item){
        data.push(item);
        console.log('Item added.......');
    }
    
    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }
    
    return {
        add: add,
        get: get
    };
})();

itemCtrl.add({id: 1, name: 'John'});
itemCtrl.add({id: 2, name: 'Mark'});
console.log(itemCtrl.get(2));