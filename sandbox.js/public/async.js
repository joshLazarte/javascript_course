document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create an XHR object
    const xhr = new XMLHttpRequest();
    
    // Open
    xhr.open('GET', 'data.txt', true);
    
    //Optional - Used for spinners and loaders
    // xhr.onprogress = function(){
    //     //add some cool stuff
    // }
    
    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    };
    
    //old way
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         alert(this.responseText);
    //     }
    // };
    
    xhr.onerror = function(){
        alert('request error...');
    };
    
    xhr.send();
}

//Ready State Values
//0: request not initialized
//1: server connection established
//2: request recieved
//3: processing request
//4: request finished and response is ready

//HTTP Status
//200: 'OK'
//403: 'Forbidden'
//404: 'Not Found'