var Ninja = (function(){
    var priv = new WeakMap();
    var _ = function(instance){
        return priv.get(instance);
    }
    var NinjaConstructor =  function(firstName, lastName){
        var privateMembers = {KunaisRemaining: 3 };
        priv.set(this,privateMembers);
        this.FirstName = firstName;
        this.LastName = lastName;
    }
    NinjaConstructor.prototype.GetFormalName = function(){
        return this.FirstName + " " + this.LastName;
    }
    NinjaConstructor.prototype.ThrowKunai = function(){
        if (_(this).KunaisRemaining>0){
            console.log("Kunai thrown by " + this.FirstName + " " + this.LastName);
            _(this).KunaisRemaining--;
        }
        else{
            console.log("No kunais left for " +this.FirstName + " " + this.LastName)
        }
    }
    return NinjaConstructor;
}())


var Kage = (function(){
    var priv = new WeakMap();
    var _ = function(instance){
        return priv.get(instance);
    }
    var KageConstructor = function(firstName, lastName, number, village){
        Ninja.apply(this, arguments);
        var privateMembers = {};
        priv.set(this,privateMembers);
        this.Number = number;
        this.Village = village;
    }
    KageConstructor.prototype = new Ninja();
    KageConstructor.prototype.constructor = KageConstructor;
    KageConstructor.prototype.GetFormalName= function(){
        return "Kage #"+ this.Number + " of the " + this.Village + " Village, " + Ninja.prototype.GetFormalName.call(this);
    }
    KageConstructor.prototype.Something = function(){
        return _(this).text;
    }
    return KageConstructor
}())
