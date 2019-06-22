function Ninja(firstName, lastName){
    "use strict";
    this.FirstName = firstName;
    this.LastName = lastName;
    this.ThrowKunai = function(){
        console.log("Kunai thrown by " + this.FirstName + " " + this.LastName);
    }
}

var naruto = new Ninja("Naruto", "Uzumaki");
var kakashi = new Ninja("Kakashi", "Hatake");
var shikamaru = new Ninja("Shikamaru", "Nara");
var asuma = new Ninja ("Asuma", "Sarutobi");
var ninjaToTrainerMap = new WeakMap();

ninjaToTrainerMap.set(naruto, kakashi);
ninjaToTrainerMap.set(shikamaru, asuma);

console.log("Ninja: "+ naruto.FirstName + ", Trainer: " + ninjaToTrainerMap.get(naruto).FirstName)
console.log("Ninja: "+ shikamaru.FirstName + ", Trainer: " + ninjaToTrainerMap.get(shikamaru).FirstName)

