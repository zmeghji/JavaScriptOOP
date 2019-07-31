function Ninja(firstName, lastName){
    var _firstName = firstName;
    var _lastName = lastName;

    var firstNameField = document.getElementById("firstName");
    var lastNameField = document.getElementById("lastName");

    firstNameField.value =_firstName;
    lastNameField.value =_lastName;

    firstNameField.onchange=function(){
        _firstName = firstNameField.value;
    }
    lastNameField.onchange=function(){
        _lastName = lastNameField.value;
    }

    Object.defineProperty(this, "firstName",{
        get: function(){return _firstName;},
        set: function(value){
            _firstName = value;
            firstNameField.value = _firstName;
        }
    })

    Object.defineProperty(this, "lastName", {
        get: function(){return _lastName;},
        set: function(value){
            _lastName = value;
            return _lastName
        }
    })
}

var ninja = new Ninja("Naruto", "Uzumaki");