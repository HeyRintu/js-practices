let student = {
    name : 'Rintu',
    age : 23,
    location : 'kolkata'
}

for(let key in student){
    console.log(`keys : ${key} --> ${student[key]}`);
}