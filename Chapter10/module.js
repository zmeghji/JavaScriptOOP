var ninjaToolsModule = (function(){
    var getNinjaToolTypes = function(){
        return ["kunai", "shuriken", "smoke bomb"]
    }
    class NinjaTool{
        constructor(type){
            this.Type= type;
        }
    }

    return {
        getNinjaToolTypes : getNinjaToolTypes,
        NinjaTool : NinjaTool
    }
}())
var ninjaModule = (function(ninjaToolsModule){
    class Ninja{
        constructor(firstName,lastName){
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Tools = [];
            var tooltypes = ninjaToolsModule.getNinjaToolTypes();
            for(var i =0; i< tooltypes.length; i++){
                this.Tools.push(new ninjaToolsModule.NinjaTool(tooltypes[i]));
            }
        }
    }
    return {
        Ninja : Ninja
    }
}(ninjaToolsModule))

var module = ninjaToolsModule;
var ninjaToolTypes = ninjaToolsModule.getNinjaToolTypes();
for (var i =0; i< ninjaToolTypes.length; i++){
    console.log(ninjaToolTypes[i]);
}

var modeule2= ninjaModule;
var ninja = new modeule2.Ninja("Naruto", "Uzumaki");
for (var i =0; i< ninja.Tools.length; i++){
    console.log(ninja.Tools[i].Type);
}
