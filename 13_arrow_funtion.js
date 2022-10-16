// let arrow = (x,y) => console.log(x*y);
// arrow(5,2);

let num =(...num) =>{
    let sum = 0;
    for(let i of num){
        sum += i;
    }
    return sum;
};

console.log(num(2,45,5,78,45));