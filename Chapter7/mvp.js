class Model{
    constructor(firstName, lastName){
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}

class View{
    constructor(presenter){
        var self = this;
        var saveButton = document.getElementById("saveButton");
        var clearButton = document.getElementById("clearButton");
        self.presenter = presenter;

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
    set firstName(value){
        var firstNameField = document.getElementById("firstName");
        firstNameField.value = value;
    }
    set lastName(value){
        var lastNameField = document.getElementById("lastName");
        lastNameField.value = value;
    }
    save(){
        var firstNameField = document.getElementById("firstName");
        var lastNameField = document.getElementById("lastName");
        var data = {
            FirstName: firstNameField.value,
            LastName: lastNameField.value
        };
        this.presenter.save(data);
    }
}

class Presenter{
    initialize(model, view){
        this.model = model;
        this.view = view;

        this.view.firstName = model.FirstName;
        this.view.lastName = model.LastName;

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
    var model = new Model("Naruto", "Uzumaki")
    var presenter = new Presenter();
    var view = new View(presenter);
    presenter.initialize(model, view);
}