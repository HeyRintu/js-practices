let arr = [1, 2, 3, 4, 5, 6, 7];

let [a, b, c, ...f] = arr;

console.log(`b --> ${b}`);
console.log(`c --> ${c}`);
console.log(`f --> ${f}`);

// spread operation
function sum(x, y) {
    return x + y;
};

console.log(sum(...[6,9]));

// rest operation


function sums(...number){
    let total = 0;
    for(let i of number){
        total += i;
    }
    return total;
}
console.log(sums(1,2,3,4,5,6,7));