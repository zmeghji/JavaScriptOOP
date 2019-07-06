
class Ninja{
    constructor(firstName, lastName){
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}

var ninja = {
    FirstName : "Naruto",
    LastName : "Uzumaki"
}

var ninja2  = new Ninja("Naruto", "Uzumaki")

var objPrototype = Object.getPrototypeOf(ninja);
var ninjaPrototype = Object.getPrototypeOf(ninja2);

console.log(objPrototype.isPrototypeOf(ninja))
console.log(ninjaPrototype.isPrototypeOf(ninja))

console.log(objPrototype.isPrototypeOf(ninja2))
console.log(ninjaPrototype.isPrototypeOf(ninja2))
