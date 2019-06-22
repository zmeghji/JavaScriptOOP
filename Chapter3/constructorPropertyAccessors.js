var Ninja = (function(){
    //Define WeakMAp to store private members
    var priv = new WeakMap();

    //Helper method to accesss private memebrs more easily
    var _ = function(instance){
        return priv.get(instance);
    }

    //Constructor method
    function NinjaConstructor(firstName, lastName){
        var privateMembers = {FirstName: firstName, LastName: lastName};
        priv.set(this,privateMembers);
    }
    
    // Getter Properties which access private members
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
    return NinjaConstructor;
}())

var ninja = new Ninja("Naruto", "Uzamaki");

console.log("First Name: " + ninja.FirstName)
console.log("Last Name: " + ninja.LastName)
