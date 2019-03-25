const http = new easyHTTP;

// //get posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, res) {
//     if(err){
//         console.log(err);
//     } else {
//       console.log(res); 
//     }
// });

// //get single post
// //get posts
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, res) {
//     if(err){
//         console.log(err);
//     } else {
//       console.log(res); 
//     }
// });

//create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, res) {
    if(err){
        console.log(err);
    } else {
      console.log(res); 
    }
});