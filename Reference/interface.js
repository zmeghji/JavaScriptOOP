class Interface{
    constructor(methods=[], properties = []){
        this.Methods = [];
        this.Properties = [];
        for (let i =0, len = methods.length; i < len; i++){
            if (typeof methods[i]!== 'string'){
                throw new Error("Interface constructor expects method names to be passed in as a string");
            }
            this.Methods.push(methods[i]);
        }
        for (let i=0, len = properties.length; i < len; i++){
            if (typeof properties[i] !== 'string'){
                throw new Error("Interface constructor expects property names to be passed in as a string");
            }
            this.Properties.push(properties[i]);
        }
    }
    IsImplementedBy(obj){
        var methodsLen = this.Methods.length;
        var propertiesLen = this.Properties.length;
        var currentMember;
        if (obj){
            //check methods 
            for (let i=0; i < methodsLen; i++){
                currentMember = this.Methods[i];
                if (!obj[currentMember] || typeof(obj[currentMember])!=="function"){
                    // throw new Error ("The object does not implement the method " + currentMember);
                    return false;
                }
            }
            //check properties
            for (let i=0; i < propertiesLen; i++){
                currentMember = this.Properties[i];
                if (!obj[currentMember] || typeof(obj[currentMember])==="function"){
                    // throw new Error ("The object does not implement the property " + currentMember);
                    return false;
                }
            }
            return true;
        }
        else{
            // throw new Error("No object to check");
            return false;
        }

    }
}
var ISquadMember = new Interface(["ThrowKunai"], ["Rank"]);

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
            if (ISquadMember.IsImplementedBy(ninja)){
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
