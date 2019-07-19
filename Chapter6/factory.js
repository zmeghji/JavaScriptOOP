

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
var NinjaToolFactory= (function(){
    class NinjaToolFactoryClass{
        constructor(){
        }
        Create(type){
            var ninjaTool;
            switch(type){
                case "Kunai":
                    ninjaTool = new Kunai();
                    break;
                case "Shuriken":
                    ninjaTool = new Shuriken();
                    break;
                case "Food Pill":
                    ninjaTool = new FoodPill();
                    break;
            }
            return ninjaTool;
        }
    }
    return NinjaToolFactoryClass;
}())

var ninjaToolFactory = new NinjaToolFactory();
console.log(ninjaToolFactory.Create("Kunai").GetType());
console.log(ninjaToolFactory.Create("Shuriken").GetType());
console.log(ninjaToolFactory.Create("Food Pill").GetType());
