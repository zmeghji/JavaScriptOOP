function Ninja(firstName, lastName){
    "use strict";
    // want to hide the following variable from code outside the class
    var _kunaisRemaining = 3;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.ThrowKunai = function(){
        if (_kunaisRemaining>0){
            console.log("Kunai thrown by " + this.FirstName + " " + this.LastName);
            _kunaisRemaining--;
        }
        else{
            console.log("No kunais left for " +this.FirstName + " " + this.LastName)
        }
    }
}

var ninja = new Ninja("Naruto", "Uzamaki");

ninja.ThrowKunai();
ninja.ThrowKunai();
ninja.ThrowKunai();
ninja.ThrowKunai();
