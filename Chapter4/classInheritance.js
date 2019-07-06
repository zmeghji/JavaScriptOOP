class Ninja{
    constructor(firstName, lastName){
        this.FirstName = firstName;
        this.LastName = lastName;
        
    }
    GetFormalName(){
        return this.FirstName +" "+ this.LastName;
    }
}

class Kage extends Ninja{
    constructor(village, number, firstName, lastName){
        super(firstName, lastName);
        this.Village = village;
        this.Number = number;
    }
    GetFormalName(){
        return "Kage #"+ this.Number + " of the " + this.Village + " Village, " + super.GetFormalName();
    }
}

var hokage = new Kage("Leaf", 7, "Naruto", "Uzumaki")

console.log(hokage.FirstName);
console.log(hokage.LastName);
console.log(hokage.Village);
console.log(hokage.Number);
console.log(hokage.GetFormalName());
