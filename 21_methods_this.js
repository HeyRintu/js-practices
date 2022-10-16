let person = {
    name : 'Rintu',
    age : 23,
    greet : function() {
        console.log(`This name is ${this.name} and this person age is ${this.age}`);
    }
}

person.greet()