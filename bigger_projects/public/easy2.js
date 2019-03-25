const http = new EasyHTTP;

//get users

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => document.body.innerHTML = data)
//     .catch(err => document.body.innerHTML = err);

//User data
const data = {
    name: 'Johnny Doe',
    userName: 'johndoe',
    email: 'johndoe@gmail.com'
};


// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => document.body.innerHTML = data.name)
//     .catch(err => document.body.innerHTML = err);
    
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => document.body.innerHTML = data.name)
//     .catch(err => document.body.innerHTML = err);
    
    
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => document.body.innerHTML = data)
    .catch(err => document.body.innerHTML = err);    


