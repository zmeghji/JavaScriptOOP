class Model{
    constructor(firstName, lastName){
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}

class View{
    constructor(model, controller){
        var self = this;
        var firstNameField = document.getElementById("firstName");
        var lastNameField = document.getElementById("lastName");
        var saveButton = document.getElementById("saveButton");
        var clearButton = document.getElementById("clearButton");

        self.controller = controller;

        firstNameField.value = model.FirstName;
        lastNameField.value = model.LastName;

        saveButton.onclick = function(){
            self.save();
        }
        clearButton.onclick = function(){
            self.clear();
        }
    }
    clear(){
        var firstNameField = document.getElementById("firstName");
        var lastNameField = document.getElementById("lastName");
        var messageContainer = document.getElementById("message");
        firstNameField.value ="";
        lastNameField.value ="";
        messageContainer.innerHTML = ""
    }
    set message(message){
        var messageContainer = document.getElementById("message");
        messageContainer.innerHTML = message;
    }
    save(){
        var firstNameField = document.getElementById("firstName");
        var lastNameField = document.getElementById("lastName");
        var data = {
            FirstName: firstNameField.value,
            LastName: lastNameField.value
        };
        this.controller.save(data);
    }
}

class Controller{
    initialize(model, view){
        this.model = model;
        this.view = view;
    }
    save(data){
        if (data.FirstName && data.LastName){
            this.model.FirstName = data.FirstName;
            this.model.LastName = data.LastName;
            this.view.message = "Saved!";
        }
        else{
            this.view.message = "Please enter first and last name";
        }
    }
}

window.onload = function(){
    var model = new Model("Naruto", "Uzumaki");
    var controller = new Controller();
    var view = new View(model, controller)
    controller.initialize(model, view)
}