var  Ninja = function(){
    var priv = new WeakMap();
    var _ = function(instance){
        return priv.get(instance);
    }
    class NinjaClass{
        
        constructor(firstName, lastName){
            var privateMembers = {KunaisRemaining: 3 };
            priv.set(this,privateMembers);
            this.FirstName = firstName;
            this.LastName = lastName;
            
        }
        GetFormalName(){
            return this.FirstName +" "+ this.LastName;
        }
        ThrowKunai = function(){
            console.log(this);
            console.log(priv);
            if (_(this).KunaisRemaining>0){
                console.log("Kunai thrown by " + this.FirstName + " " + this.LastName);
                _(this).KunaisRemaining--;
            }
            else{
                console.log("No kunais left for " +this.FirstName + " " + this.LastName)
            }
        }
    }
    return NinjaClass;
}()
var Kage = function (){
    var priv = new WeakMap();
    var _ = function(instance){
        return priv.get(instance);
    }
    class KageClass extends Ninja{
        constructor(village, number, firstName, lastName){
            super(firstName, lastName);
            var privateMembers = {text: "text"};
            priv.set(this,privateMembers);
            this.Village = village;
            this.Number = number;
        }
        GetFormalName(){
            return "Kage #"+ this.Number + " of the " + this.Village + " Village, " + super.GetFormalName();
        }
        ThrowKunai(){
            super.ThrowKunai();
        }
        Something(){
            return _(this).text;
        }
    }
    return KageClass;
}()