function greet() {
    console.log('Hello there');
}

function sayname(name) {
    console.log(name);
}

// run once
setTimeout(greet, 2000);
sayname('Rintu');

// run in 1000ms intervals
setInterval(greet, 1000);