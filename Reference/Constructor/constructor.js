//class is defined as an IIFE (immediately invoked function expression)
var Ninja = (function(){
    //Define WeakMAp to store private members
    var priv = new WeakMap();

    //Helper method to accesss private memebrs more easily
    var _ = function(instance){
        return priv.get(instance);
    }

    //Constructor method
    function NinjaConstructor(firstName, lastName){
        var privateMembers = {FirstName: firstName, LastName: lastName, KunaisRemaining: 3 };
        priv.set(this,privateMembers);
    }

        // Define getter properies on the prototype property of constructor
        Object.defineProperty(
            NinjaConstructor.prototype,
            "FirstName",
            {
                get: function(){
                    return _(this).FirstName;
                },
                configurable: false,
                enumerable: true
            }
        )
        Object.defineProperty(
            NinjaConstructor.prototype,
            "LastName",
            {
                get: function(){
                    return _(this).LastName;
                },
                configurable: false,
                enumerable: true
            }
        )

    // Use the prototype property to define public methods
    NinjaConstructor.prototype.ThrowKunai = function(){
        if (_(this).KunaisRemaining>0){
            console.log("Kunai thrown by " + _(this).FirstName + " " + _(this).LastName);
            _(this).KunaisRemaining--;
        }
        else{
            console.log("No kunais left for " + _(this).FirstName + " " + _(this).LastName)
        }
    }
    return NinjaConstructor;
}())

