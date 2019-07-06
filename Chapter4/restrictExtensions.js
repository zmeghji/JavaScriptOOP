//Object.preventExtensions Example
var ninja = {
    FirstName : "Naruto",
    LastName : "Uzumaki",
    ChakraCapacity : 1000000
}

Object.preventExtensions(ninja);
ninja.PrimaryChakraNature = "Wind"; //This will fail
delete ninja.ChakraCapacity; //this will succeed
ninja.FirstName = "Boruto"; //this will succeed
console.log(ninja.PrimaryChakraNature);
console.log(ninja.ChakraCapacity);
console.log(Object.isSealed(ninja)); //should be false
console.log(ninja.FirstName);


//Object.seal Example
var ninja2 = {
    FirstName : "Naruto",
    LastName : "Uzumaki",
    ChakraCapacity : 1000000
}

Object.seal(ninja2);
ninja2.PrimaryChakraNature = "Wind"; //This will fail
delete ninja2.ChakraCapacity; //this will fail
ninja2.FirstName = "Boruto"; //this will succeed
console.log(ninja2.PrimaryChakraNature);
console.log(ninja2.ChakraCapacity);
console.log(Object.isSealed(ninja2)); //should be true
console.log(ninja2.FirstName);

//Object.freeeze Example
var ninja3 = {
    FirstName : "Naruto",
    LastName : "Uzumaki",
    ChakraCapacity : 1000000
}

Object.freeze(ninja3);
ninja3.PrimaryChakraNature = "Wind"; //This will fail
delete ninja3.ChakraCapacity; //this will fail
ninja3.FirstName = "Boruto"; //this will fail
console.log(ninja3.PrimaryChakraNature);
console.log(ninja3.ChakraCapacity);
console.log(Object.isSealed(ninja3)); //should be true
console.log(ninja3.FirstName);



