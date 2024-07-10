// for loops

for(let i=0; i<5; i++)
    {
        console.log('in loop:', i);
    }
    
    const names = ['shaun', 'mario', 'luigi'];
    for(let i=0; i<names.length; i++) {
        let html = `<div>${names[i]}</div>`;
        console.log(html);
    }
    
    // while loops
    
    // for(let i=0; i<5; i++)
    // {
    //     console.log('in loop:', i);
    // }
    
    const forLoopNames = ['shaun', 'mario', 'luigi'];
    let i=0;
    while(i < 5)
    {
        console.log(forLoopNames[i]);
        i++;
    }
    
    // Do while Loops
    // let j=0;
    // while(j<5)
    // {
    //     console.log('val of i is:', i);
    //     i++;
    // }
    
    let k=5;
    
    do {
        console.log('val of k is: ', k);
        k++;
    } while(k < 5);
    
    // if statements
    const age = 25;
    
    if(age > 20)
    {
        console.log('you are over 20 years old');
    }
    const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
    if(ninjas.length > 4)
    {
        console.log("that`s a lot of ninjas");
    }
    
    const password = "p@ss";
    if(password.length >= 8)
    {
        console.log('that password is long enough !');
    }
    
    // else if statements
    // logical operators - OR || and AND &&
    const newestPassword = 'p@ss';
    if(newestPassword.length > 12 && newestPassword.includes('@'))
    {
        console.log('that password is might strong');
    }
    else if(newestPassword.length >= 8 || password.includes('@'))
    {
        console.log('that password is long enough!');
    }
    else
    {
        console.log('password is not long enough!');
    }

    //logical NOT (!)
    let user = false
    if(!user)
    {
        console.log('you must be logged in to continue....');
    }

console.log(!true);
console.log(!false);

// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for(let i=0; i<scores.length; i++)
{
    if(scores[i] === 0)
    {
        continue;
    }
    console.log('your score: ', scores[i]);  
    if(scores[i] === 100)
    {
        console.log('congrats, you got the top score!');
        break;
    }
}

// switch statements
const grade = 'D';

if(grade === 'A'){

}
else if(grade === 'B')
{
    
}
else if(grade === 'C')
{

}
else if(grade === 'D')
{

}
else if(grade === 'E')
{

}
else
{

}

const newGrade = 'D';
switch(newGrade){
    case 'A':
        console.log('you got an A!');
    case 'B':
        console.log('you got a B!');
    case 'C':
        console.log('you got a C!');
    case 'D':
        console.log('you got an D!');
    case 'E':
        console.log('you got an E!');
        break;
        default:
            console.log('not a valid grade');
}

// variables and block scope 
let mynewerage = 30;
if(true)
{
    // let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block: ', age, name);
if(true)
{
    console.log('inside 2nd code block: ', age);
}
}
console.log('outside code block: ', age);

//make programs for defining local and global scope please see to it once



    

