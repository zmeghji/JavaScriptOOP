
var ninja = {
    FirstName : "Naruto",
    LastName : "Uzumaki"
};

var hokage = {
    Number: 7
};

Object.setPrototypeOf(hokage, ninja);

console.log(Object.getPrototypeOf(hokage));
console.log(hokage.FirstName);
console.log(hokage.LastName);
