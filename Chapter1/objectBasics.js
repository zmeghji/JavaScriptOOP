//Defining an object with literal notation
var ninja = {
    FirstName : "Naruto",
    LastName : "Uzumaki",
    Punch(){
        console.log("ninja threw punch");
    },
    ThrowShuriken(){
        console.log("Shuriken thrown by " + this.FirstName + " " + this.LastName)
    }
};

//Acess property with dot notation
console.log("First Name: " + ninja.FirstName);

//Access property with []
console.log("First Name: " + ninja["FirstName"]);

//call method property of object
ninja.Punch();
ninja.ThrowShuriken();

//use delete method to delete an object property
delete ninja.FirstName
console.log("First Name: " + ninja.FirstName);


