

var Kunai = (function(){
    class KunaiClass{
        constructor(){
        }
        GetType(){
            return "Kunai";
        }
    }
    
    return KunaiClass
}())

var Shuriken = (function(){
    class ShurikenClass{
        constructor(){
        }
        GetType(){
            return "Shuriken";
        }
    }
    return ShurikenClass
}())

var FoodPill = (function(){
    class FoodPillClass{
        constructor(){
        }
        GetType(){
            return "Food Pill";
        }
    }
    return FoodPillClass
}())

var NinjaToolsFactory = (function(){
    
    class NinjaToolsFactoryClass{
        constructor(){
            this.NinjaToolClasses = {};
        }
        Register(toolType, toolClass){
            this.NinjaToolClasses[toolType] =toolClass;
        }
        Create(toolType){
            return new (this.NinjaToolClasses[toolType])();
        }
    }
    return NinjaToolsFactoryClass;
}())

var ninjaToolsFactory = new NinjaToolsFactory();
ninjaToolsFactory.Register("Kunai", Kunai);
ninjaToolsFactory.Register("Shuriken", Shuriken);
ninjaToolsFactory.Register("Food Pill", FoodPill);

console.log(ninjaToolsFactory.Create("Kunai").GetType());
console.log(ninjaToolsFactory.Create("Shuriken").GetType());
console.log(ninjaToolsFactory.Create("Food Pill").GetType());
