// let re;
// re =/hello/;
// re = /hello/i; //i = case insensitive
// re = /hello/g; //Global Search(find all instances);

// console.log(re);
// console.log(re.source);

//exec() - return result in an array if a match or null if not

// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test returns true or false

// const result = re.test('Hello');

// console.log(result);

//match() return result array or null
// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);

//search() return index of first match, if not found returns -1;
// const str = 'Hello There';
// const result = str.search(re);

// console.log(result);

//replace() return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');

// console.log(newStr);
//=================================================

let re;
//literal characters
re = /hello/;
re = /hello/i;

//metacharacter symbols
re = /^h/i; //must start with
re = /world$/i; //must end with
re = /^hello$/i; //must start and end with
re = /h.llo/i; //matches any one character
re = /h*llo/i; //matches any character 0 or more times
re = /gre?a?y/i; //optional character
re = /gre?a?y\?/i; //escape character



//brackets [] - character sets
re = /gr[ae]y/i; //character must be one of the characters in bracket
re = /[GF]ray/; //character must be one of the characters in bracket
re = /[^GF]ray/; //match anything except whats in the brackets
re = /[A-Z]ray/; //match any uppercase letter;
re = /[a-z]ray/; //match any lowercase letter;
re = /[A-Za-z]ray/; //match any letter;
re = /[0-9]ray/; //match any digit;

// braces {} - quantifiers

re = /hel{2}o/i; //must have 2 l's. refers to leter in front
re = /hel{2,4}o/i; //must have 2-4 l's. refers to leter in front
re = /hel{2,}o/i; //must have at least 2 l's. refers to leter in front

//parenthesis () - grouping
re = /([0-9]x){3}/i; //everything in parenthisis must be there 3 times

//Shorthand character classes
re = /\w/; //word character - alphanumeric or _ character
re = /\w+/; // + = one or more
re = /\W/; // none word characters
re = /\d/; // match any digit 
re = /\d+/; // match any 0 or more times digit 
re = /\D/; // non digit 
re = /\s/; // match whitespace char
re = /\S/; // match non whitespace char
re = /Hell\b/i; // word boundary must be exact word

//assertions
re = /x(?=y)/; // match x only if it's followed by y
re = /x(?!y)/; // match x only if it's not followed by y


//str to match
const str = 'xygfgsdgds';

//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);