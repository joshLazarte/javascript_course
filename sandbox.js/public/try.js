const user = {email: 'janedoe@email.com'};

try {
    //reference error
    // myFunction();
    
    //type error
    // null.myFunction();
    
    //syntax err
    // console.log(eval('hello world'));
    
    //URI error
    // decodeURIComponent('%');
    if(!user.name){
        //throw 'user has no name';
        throw new SyntaxError('user has no name');
    }
    
} catch(e) {
    console.log(`User Error: ${e}`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log('Finally Runs Regardless of Result');
}

console.log('Program continues...');