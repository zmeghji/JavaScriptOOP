

var objFromNull = Object.create(null);
console.log(Object.getPrototypeOf(objFromNull));

var ninja = {
    FirstName : "Naruto",
    LastName : "Uzumaki"
}


var objFromNinja = Object.create(ninja);
console.log(Object.getPrototypeOf(objFromNinja));

