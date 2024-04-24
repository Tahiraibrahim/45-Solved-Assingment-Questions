#! /usr/bin/env node

let guest_list : string [] = ['Fahmida' , 'Saima' , 'Soniya' , 'Faiza' , 'Kainat'];
for (let i=0; i<guest_list.length; i++) {
    console.log ('Respected Madam' + guest_list[i] + '\nI would like to invite you to dinner tomorrow. \n\n Thank You')
}
export{guest_list};