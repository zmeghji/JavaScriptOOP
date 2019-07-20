class Model{
    constructor(firstName, lastName){
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}
class View{
    constructor(modelView){
        var self = this;
        var firstNameField = document.getElementById("firstName");
        var lastNameField = document.getElementById("lastName");
        var saveButton = document.getElementById("saveButton");
        var clearButton = document.getElementById("clearButton");

        self.modelView = modelView;

        firstNameField.value = modelView.FirstName;
        lastNameField.value = modelView.LastName;

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
    setMessage(message){
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
        this.modelView.save(data, this.setMessage);
    }
}

class ViewModel{
    constructor(model){
        this.model = model;
    }
    get FirstName(){
        return this.model.FirstName;
    }
    get LastName(){
        return this.model.LastName;
    }
    save(data, callback){
        if (data.FirstName && data.LastName){
            this.model.FirstName = data.FirstName;
            this.model.LastName = data.LastName;
            if (callback){
                callback("Saved!");
            }
        }
        else{
            if (callback){
                callback("Please enter first and last name");
            }
        }
    }
}

window.onload = function(){
    var model = new Model("Naruto", "Uzumaki");
    var viewModel = new ViewModel(model);
    var view = new View(viewModel);

}