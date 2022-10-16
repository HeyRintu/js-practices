// for(let i = 0; i<5; i++){
//     a = i*i;
//     console.log(a);
// }

let con = ['india', 'uk', 'us'];
let newcon = [];

for( let i = 0; i < con.length; i++){
    newcon.push(con[i].toLocaleUpperCase());
}
console.log(newcon);