var ninja ={
    FirstName: "Naruto",
    LastName: "Uzumaki",
}

//Create property with accessor descriptor
Object.defineProperty(
    //object to define property on
    ninja,
    //Name of property
    "FullName",
    //Descriptor (in this case, an accessor descriptor)
    {
        get: function(){
            return ninja.FirstName + " " +ninja.LastName
        },
        set: function(value){
            ninja.FirstName = value.split(" ")[0];
            ninja.LastName = value.split(" ")[1];
        },
        //if configurable is set to true, the property may be deleted and the type may be changed
        configurable: false,
        // if enumerable is set to true the property will show up when enumerating through the properties of the object
        enumerable: false
    }
);

console.log("Full Name:" + ninja.FullName)
ninja.FullName = "Sasuke Uchiha";
console.log("Full Name:" + ninja.FullName)

//Create property with data descriptor
Object.defineProperty(
    //object to define property on
    ninja,
    //Name of property
    "Title",
    //Descriptor (in this case, a data descriptor)
    {
        value: "Ninja",
        //if writable is set to true, the value of the property can be modified using an assignment operator
        writable: false,
        //if configurable is set to true, the property may be deleted and the type may be changed
        configurable: false,
        // if enumerable is set to true the property will show up when enumerating through the properties of the object
        enumerable: false
    }
);

console.log("Title:" + ninja.Title)
ninja.Title = "Expert Ninja";// this should fail
console.log("Title:" + ninja.Title)