document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

// function getText(){
//     fetch('test.txt')
//     .then(function(res){
//         return res.text();
//     })
//     .then(function(data){
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err){
//         alert(err);
//     });
// }


// function getJSON(){
//     fetch('posts.json')
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         let output = '';
//         data.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         alert(err);
//     });
// }

// function getExternal(){
//     fetch('https://api.github.com/users')
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         let output = '';
//         data.forEach(function(user){
//             output += `<li>${user.login}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         alert(err);
//     });
// }


//arrow functions
function getText(){
    fetch('test.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => alert(err));
}

function getJSON(){
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => alert(err));
}

function getExternal(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => alert(err));
}

