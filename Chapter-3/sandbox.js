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
    
    const newestPassword = 'p@ss';
    if(newestPassword.length > 12)
    {
        console.log('that password is might strong');
    }
    else if(newestPassword.length >= 8)
    {
        console.log('that password is long enough!');
    }
    else
    {
        console.log('password is not long enough!');
    }
    
    
    