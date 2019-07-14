var Squad = function(){
    var priv = new WeakMap();
    var _ = function(instance){
        return priv.get(instance);
    }
    class SquadClass{
        constructor(){
            var privateMembers = {Ninjas: []};
            priv.set(this,privateMembers);
        }
        ImplementsMethod(obj, method){
            return (obj && obj[method] && obj[method] instanceof Function);
        }
        ImplementsProperty(obj, property){
            return (obj && obj[property] && !(obj[property] instanceof Function));
        }
        AddNinja(ninja){
            if (this.ImplementsMethod(ninja, "ThrowKunai") && this.ImplementsProperty(ninja, "Rank")){
                _(this).Ninjas.push(ninja);
            }
            else{
                console.log("Invalid Squad Member");
            }
        }
        KunaiBarrage(){
            for(var i = 0; i < _(this).Ninjas.length; i++){
                _(this).Ninjas[i].ThrowKunai();
            }
        }
        LogRanks(){
            for(var i = 0; i < _(this).Ninjas.length; i++){
                console.log(_(this).Ninjas[i].Rank);
            }
        }
    }
    return SquadClass;
}()

var Ninja = function(){
    var priv = new WeakMap();
    var _ = function(instance){
        return priv.get(instance);
    }
    class NinjaClass{
        constructor(firstName, lastName, rank){
            var privateMembers = {FirstName: firstName, LastName: lastName};
            priv.set(this,privateMembers);
            this.Rank = rank;
        }
        ThrowKunai(){
            console.log( _(this).FirstName + " "+ _(this).LastName + " threw a kunai.")
        }
    }
    return NinjaClass
}()

var squad = new Squad();
squad.AddNinja(new Ninja("Naruto", "Uzumaki", "Genin"));
squad.AddNinja(new Ninja("Sakura", "Haruno", "Genin"));
squad.AddNinja(new Ninja("Sasuke", "Uchiha", "Genin"));
squad.AddNinja(new Ninja("Kakashi", "Hatake", "Jonin"));

squad.AddNinja({FirstName: "Inari", Occupation: "Bridge Builder", ThrowKunai: function(){}});
squad.AddNinja({FirstName: "Ton-Ton", Species: "Pig"});

squad.KunaiBarrage();

