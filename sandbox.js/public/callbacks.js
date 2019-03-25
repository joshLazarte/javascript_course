const posts = [
 {title: 'Post One', body:'This is Post One'},
 {title: 'Post Two', body:'This is Post Two'}
];


//Synchronus. getPosts runs before createPost due to setTimeout delays(simulating server latency)
// function createPost(){
//     setTimeout(function(post){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// createPost({title: 'Post 3', body: 'This is Post Three'});

// getPosts();

//Asynchronus. getPosts is passed as a callback function and ran within createPost
// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);

//Me messing around
// class Post {
//     constructor(title, body){
//         this.title = title;
//         this.body = body;
//     }
//     static createPost(cb){
//         const titleField = document.getElementById('title');
//         const bodyField = document.getElementById('body');
//         let post = new Post(titleField.value, bodyField.value);
//         cb(post, titleField, bodyField);
//     }
//     static getPosts(post, f1, f2){
//         const li = document.createElement('li');
//         li.textContent = `${post.title}: ${post.body}`;
//         document.getElementById('posts').appendChild(li);
//         f1.value = '';
//         f2.value = '';
//     }
// }

// document.querySelector('#btn').addEventListener('click', function(e){
//     Post.createPost(Post.getPosts);
//     e.preventDefault();
// });

//promises, instead of callbacks
function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            
            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
            
        }, 2000);
    });
    
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is Post Three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});