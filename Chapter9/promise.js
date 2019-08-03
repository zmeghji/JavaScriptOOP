var manageError = function(error){
    console.log(error.message);
}
class Ninja{
    constructor(firstName, lastName, id){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Id = id;
    }
}
var getNinja = function(firstName){
    return new Promise(function (resolve, reject) {
        if (firstName && firstName == "Naruto"){
            resolve (new Ninja ("Naruto", "Uzumaki", 1))
        }
        else if (firstName && firstName == "Sasuke"){
            resolve (new Ninja ("Sasuke", "Uchiha", 2))
        }
        else if (firstName && firstName == "Sakura"){
            resolve (new Ninja("Sakura", "Haruno"))
        }
        else{
            reject(new Error("Ninja does not exist in system"));
        }
    })
}

var getJutsu = function(ninja){
    return new Promise (function(resolve, reject){
        if (ninja && ninja.Id && ninja.Id == 1){
            resolve ("Rasengan")
        }
        else if (ninja && ninja.Id && ninja.Id == 2){
            resolve ("Chidori")
        }
        else{
            reject(new Error("Cannot find jutsu of ninja"));
        }
    })
}

getNinja("Naruto").then(
    function(ninja){
        console.log("Retrieved "+ ninja.FirstName + " " + ninja.LastName)
    },
    manageError
)
getNinja("Sasuke").then(
    function(ninja){
        console.log("Retrieved "+ ninja.FirstName + " " + ninja.LastName)
    },
    manageError
)

getNinja("Sakura").then(
    function(ninja){
        console.log("Retrieved "+ ninja.FirstName + " " + ninja.LastName)
    },
    manageError
)
getNinja("Shikamaru").then( 
    function(ninja){
        console.log("Retrieved "+ ninja.FirstName + " " + ninja.LastName)
    }
    ,
    manageError
)

getNinja("Naruto").then(getJutsu,manageError).then(function(jutsu){console.log(jutsu)},manageError);
getNinja("Sasuke").then(getJutsu,manageError).then(function(jutsu){console.log(jutsu)},manageError);
getNinja("Sakura").then(getJutsu,manageError).then(function(jutsu){console.log(jutsu)},manageError);
getNinja("Shikamaru").then(getJutsu,manageError).then(function(jutsu){console.log(jutsu)},manageError);

getNinja("Shikamaru").then(getJutsu).then(function(jutsu){console.log(jutsu)},manageError);

getNinja("Shikamaru").then(getJutsu).then(function(jutsu){console.log(jutsu)}).catch(manageError);

var getNinjaPromisesSet1 = 
[
    getNinja("Sakura"),
    getNinja("Sasuke")
]
var getNinjaPromisesSet2 = 
[
    getNinja("Sakura"),
    getNinja("Shikamaru")
]

Promise.all(getNinjaPromisesSet1).then(
    function(results){
        console.log("all promises executed successfully")
    }
).catch(
    function(error){
        console.log("one of the promises failed")
    }
)
Promise.all(getNinjaPromisesSet2).then(
    function(results){
        console.log("all promises executed successfully")
    }
).catch(
    function(error){
        console.log("one of the promises failed")
    }
)

