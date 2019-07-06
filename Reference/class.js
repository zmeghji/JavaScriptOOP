//class is defined as an IIFE (immediately invoked function expression)
var Ninja = (function(){
    //Define WeakMAp to store private members
    var priv = new WeakMap();

    //Helper method to accesss private memebrs more easily
    var _ = function(instance){
        return priv.get(instance);
    }
    //Class
    class NinjaClass{
        constructor(firstName, lastName){
            var privateMembers = {FirstName: firstName, LastName: lastName, KunaisRemaining: 3 };
            priv.set(this,privateMembers);
        }
        //define getter inside class
        get FirstName(){
            return _(this).FirstName;
        }
        // define public methods
        ThrowKunai = function(){
            if (_(this).KunaisRemaining>0){
                console.log("Kunai thrown by " + _(this).FirstName + " " + _(this).LastName);
                _(this).KunaisRemaining--;
            }
            else{
                console.log("No kunais left for " + _(this).FirstName + " " + _(this).LastName)
            }
        }
    }

        Object.defineProperty(
            NinjaClass.prototype,
            "LastName",
            {
                get: function(){
                    return _(this).LastName;
                },
                configurable: false,
                enumerable: true
            }
        )

    
    return NinjaClass;
}())

