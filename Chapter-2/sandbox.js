// strings
console.log('hello, world');

let email = "pranjalsinha1965@gmail.com";
console.log(email);

// string concatenation
let firstName = "Brandon";
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

// indexOf method
let index = email.indexOf('s');
console.log(index);

// common string methods
let myEmail = 'pranjalsinha1965@gmail.com';
let newResult = myEmail.lastIndexOf('n');
console.log(newResult);

let newestResult = myEmail.slice(0, 10);
console.log(newestResult);

let newerResult = myEmail.substr(0, 10);
console.log(newerResult);

let myResult = email.replace('m', 'w');
console.log(myResult);

let myNewestResult = email.replace(/n/g, 'w'); // replacing all occurrences of 'n'
console.log(myNewestResult);

let radius = 10;
const pi = 3.14;

console.log(radius);
console.log(pi);

//math operators +, -, *, /, **, %
console.log(10 / 2);
let myNewertResult = radius % 3;
console.log(myNewertResult);
let myarea = pi * radius ** 2;

// order of operation - B I D M A S
let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

let newestmyresult = 'the blog has' + likes + ' likes ';
console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const newlikes = '30';

// concatenation way
let concatenationResult = 'The blog called ' + title + 'by ' + author + ' has ' + likes + ' likes ';
console.log(concatenationResult);

// template string way
let templateStringResult = 'The blog called ${title} by ${likes} has ${likes} likes';
console.log(result);

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes}</span>
`;
console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);


let ages = [20, 25, 30, 35];
console.log(ages[2]);


let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// array methods
let arrayResult = ninjas.join(',');
let resultsArray = ninjas.indexOf('chun-li');
let resultingArray = ninjas.concat(['ken', 'crystal']);
let resultantArray = ninjas.push('ken');
result = ninjas.pop();
console.log(result);

let neighboursAge = null;
console.log(neighboursAge, neighboursAge + 3, `the age is ${neighboursAge}`);

//boleans & comparisions
console.log(true, false, "true", "false");

//methods can return booleans
let myNeighboursResultemail = "luigi@thenetninja.co.uk";
let myNeighboursResult = ['mario', 'luigi', 'toad'];

let myCurrentResult = myNeighboursResultemail.includes('!');
console.log(myCurrentResult);

//comparision operators
let age = 25;

console.log(age == 25);
console.log(age >= 25);
console.log(age != 25);
console.log(age <= 25);
console.log(age > 25);
console.log(age < 25);

let namelyString = 'shaun';
console.log(namelyString == 'shaun');
console.log(namelyString > 'crystal');
console.log(namelyString > 'shaun');
console.log(namelyString > 'Crystal');

let myNeighboursAge = 25;

// loose comparision (different types can still be equal)
console.log(age == 25);
console.log(age == '25');

// strict comparision (different types cannot be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

// type conversion
let score = '100';
// console.log(score + 1);

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

let myResultNumbers = Number('hello');
console.log(result);

let myResultsNumbers = String(50);
console.log(result);

console.log(result, typeof result);
// let myNumbersResult = Boolean(0);
let myNumbersResult = Boolean('0');
console.log(result, typeof result);

// no character type in javascript they all come under strings

// There`s no separate data type for fractions and these thongs are treated as numbers datatype.




