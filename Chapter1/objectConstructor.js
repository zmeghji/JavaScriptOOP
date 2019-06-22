function Ninja(firstName, lastName){
    "use strict";
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Punch = function(){
        console.log("ninja threw punch");
    };
    this.ThrowKunai = function(){
        console.log("Kunai thrown by " + this.FirstName + " " + this.LastName);
    }
}

var ninja = new Ninja("Naruto", "Uzumaki");
console.log("First Name: " + ninja.FirstName);
console.log("Last Name: " + ninja.LastName);
ninja.Punch();
ninja.ThrowKunai();

//Add method to class via prototype extension
Ninja.prototype.ThrowShuriken = function(){
    console.log("Shuriken thrown by " + this.FirstName + " " + this.LastName);
}
ninja.ThrowShuriken()