#! /usr/bin/env node

let current_users: string[] = ["Saima" , "FahMida" , "Admin" , "FaIza" , "Kainat"];
let new_users: string[] = ["Hameed" , "IbrAhim" , "FahMida" , "SalaHuddin" , "Admin"];

new_users.forEach(new_users => { 
    let lowerCause: string = new_users.toLowerCase();
    
    if(current_users.map(c_user =>c_user.toLowerCase()).includes(lowerCause)){
        console.log(`The username ${new_users} is not available. Please write a different username`);
    }
    else{
        console.log(`The username ${new_users} is available`);
    }
})
   