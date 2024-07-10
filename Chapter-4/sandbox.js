// function declaration
// function greet(){
//     console.log('hello there');
// }

//function expression
// const speak = function() {
//     console.log('good day!');
// };
// greet();
// greet();
// greet(); 

// speak();
// speak();
// speak();
// invoking a function or calling a function

// arguments and parameters

// const speak = function(name, time){
//     console.log(`good ${time} ${name}`);
// };
// speak();
// speak('mario', 'morning');
// speak('shaun', 'day');

//regular function
// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }
// const area = calcArea(5);
// console.log('area is: ', area);

//arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// }

// const greet = () => {
//     return 'hello world'
// }
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i=0; i<products.length; i++)
//     {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10, 15, 30]), 0.2);

// const name = 'shaun';
//function
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);
//methods
// let resultTwo = name.toUpperCase()
// console.log(resultTwo);

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };
// myFunc(function(value){
//     console.log(value);
//     //do something
// });

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
};

// const logPerson = (person, index) => {
//     console.log(index, person);
// };

people.forEach(logPerson);

// get reference to the ul
const ul = document.querySelector('.people');
let html = ``;
people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`
});

console.log(html);
ul.innerHTML = html;



