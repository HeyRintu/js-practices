// nested object
let first = {
    'x' : 99,
    'y' : 100,
    'z' : {
        'p' : 11,
        'q' : 43,
        'r' : 12,
    }
}

console.log(first);

// update the value
first.x = 69;
console.log(first.x);