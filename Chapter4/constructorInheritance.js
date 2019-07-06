var Ninja = function(firstName, lastName){
    this.FirstName = firstName;
    this.LastName = lastName;
    
}

Ninja.prototype.GetFormalName = function(){
    return this.FirstName + " " + this.LastName;
}

var Kage = function(firstName, lastName, number, village){
    Ninja.apply(this, arguments)
    this.Number = number;
    this.Village = village;
}
Kage.prototype = new Ninja();
Kage.prototype.constructor = Kage;
Kage.prototype.GetFormalName= function(){
    return "Kage #"+ this.Number + " of the " + this.Village + " Village, " + Ninja.prototype.GetFormalName.call(this);
}

var hokage = new Kage("Naruto", "Uzumaki", 7 , "Leaf");

console.log(hokage.FirstName);
console.log(hokage.LastName);
console.log(hokage.Number);
console.log(hokage.Village);

console.log(hokage.GetFormalName());



