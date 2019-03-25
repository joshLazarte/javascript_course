// async function myFunc(){
//     return 'Hello';
    
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });
    
//     const error = true;
    
//     if(!error){
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunc()
//     .then(res => alert(res))
//     .catch(err => alert(err));

async function getUsers(){
    //await response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    //only proceed once promise is resolved
    const data = await response.json();
    //only proceed once second promise is resolved
    return data;
}

getUsers().then(users => alert(users[6].id));