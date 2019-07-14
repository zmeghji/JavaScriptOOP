class Ninja {
    constructor(){

    }
}

class Kage extends Ninja{
    constructor(){
        super();
    }
}

var boruto = new Ninja();
var naruto = new Kage();

console.log(boruto instanceof Ninja); // true
console.log(boruto instanceof Kage); //false

console.log(naruto instanceof Ninja); //true 
console.log(naruto instanceof Kage); //false