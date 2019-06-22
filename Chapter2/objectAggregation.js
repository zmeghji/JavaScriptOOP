class Ninja{
    constructor(firstName, lastName, jutsus){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Jutsus = jutsus;
    }
}

class Jutsu{
    constructor(name, type){
        this.Name = name;
        this.type = type;
    }
}

var jutsus = [ 
    new Jutsu("rasengan", "ninjutsu"), 
    new Jutsu("uzumaki barrage", "taijutsu")
];

var ninja = new Ninja("Naruto", "Uzumaki", jutsus);

console.log("Name: " + ninja.FirstName + " "+ ninja.LastName);
for (var i =0; i < ninja.Jutsus.length; i++){
    console.log("Jutsu: " + ninja.Jutsus[i].Name);
}
