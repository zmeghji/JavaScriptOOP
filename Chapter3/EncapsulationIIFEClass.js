var Ninja = (function(){
    //Define WeakMAp to store private members
    var priv = new WeakMap();

    //Helper method to accesss private memebrs more easily
    var _ = function(instance){
        return priv.get(instance);
    }
    
    //class
    class NinjaClass{
        constructor(firstName, lastName){
            var privateMembers = {FirstName: firstName, LastName: lastName, KunaisRemaining: 3 };
            priv.set(this,privateMembers);
        }
    } 

    // Use the prototype property to define public methods
    NinjaClass.prototype.ThrowKunai = function(){
        if (_(this).KunaisRemaining>0){
            console.log("Kunai thrown by " + _(this).FirstName + " " + _(this).LastName);
            _(this).KunaisRemaining--;
        }
        else{
            console.log("No kunais left for " + _(this).FirstName + " " + _(this).LastName)
        }
    }
    return NinjaClass;
}())

var ninja = new Ninja("Naruto", "Uzamaki");

ninja.ThrowKunai();
ninja.ThrowKunai();
ninja.ThrowKunai();
ninja.ThrowKunai();
