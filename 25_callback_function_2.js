function greet(name, myName) {
    console.log('Hello JS');
    myName(name);
}

function myName(name) {
    console.log(`I'm ${name}`);
}

setInterval(greet, 1000, 'Rintu', myName)