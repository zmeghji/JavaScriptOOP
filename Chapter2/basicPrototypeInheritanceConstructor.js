function Ninja(){
    "use strict";
    this.Punch = function(){
        console.log("ninja threw punch");
    };
    
}

function TrackerNinja(){
    this.SenseChakra = function(){
        console.log("Tracker Ninja is sensing chakra")
    }
}

TrackerNinja.prototype = new Ninja();

var trackerNinja = new TrackerNinja();
trackerNinja.SenseChakra();
trackerNinja.Punch();