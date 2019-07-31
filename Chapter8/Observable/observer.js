function observable(value){
    var subscribers = [];

    function notify(newValue){
        for (var i = 0; i < subscribers.length; i++){
            subscribers[i](newValue);
        }
    }
    function accessor(newValue){
        if (arguments.length && newValue!== value){
            value = newValue;
            notify(newValue);
        }
        return value;
    }
    accessor.subscribe = function(subscriber){
        subscribers.push(subscriber);
    }
    return accessor;
}

function Ninja (firstName, lastName){
    this.FirstName = firstName;
    this.LastName = lastName;
}

var naruto = observable("naruto");
var uzumaki = observable("uzumaki");
var firstNameField = document.getElementById("firstName");
var lastNameField = document.getElementById("lastName");

var ninja = new Ninja(naruto, uzumaki);
firstNameField.value = ninja.FirstName();
lastNameField.value = ninja.LastName();

ninja.FirstName.subscribe(function(value){
    firstNameField.value = value;
    
})
ninja.LastName.subscribe(function(value){
    lastNameField.value = value;
})

setTimeout(function(){
    ninja.FirstName("Sasuke")
    ninja.LastName("Uchiha")
}, 5000)

