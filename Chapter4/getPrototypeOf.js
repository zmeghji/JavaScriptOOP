var ninja = {
    FirstName : "Naruto",
    LastName : "Uzumaki"
}

class Ninja{
    constructor(firstName, lastName){
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}

console.log(Object.getPrototypeOf(ninja))
var ninja2  = new Ninja("Naruto", "Uzumaki")
console.log(Object.getPrototypeOf(ninja2));
