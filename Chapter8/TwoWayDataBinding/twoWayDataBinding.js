function createNinja(firstName, lastName){
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
    return {
        firstName: function(value){
            if (value){
                _firstName =value;
                firstNameField.value = value;
            }
            return _firstName;
        },
        lastName: function(value){
            if (value){
                _lastName = value;
                lastNameField.value = value;
            }
            return _lastName;
        }
    }


}

var ninja = new createNinja("Naruto", "Uzumaki");
ninja.firstName("Boruto");