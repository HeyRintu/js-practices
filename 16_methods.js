// decrearing method -- funtion inside object is called method 

let person = {
    name : 'rintu',
    greet : function() {
        console.log('Have a nice day ' + this.name);
    }
    
}



console.log(person.name);
person.greet()

