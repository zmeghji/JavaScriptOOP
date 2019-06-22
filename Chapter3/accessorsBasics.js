var ninja ={
    FirstName: "Naruto",
    LastName: "Uzumaki",
    get FullName(){
        return this.FirstName + " " + this.LastName
    },
    set FullName(value){
        this.FirstName = value.split(" ")[0];
        this.LastName = value.split(" ")[1];
    }
}

console.log("Full Name:" + ninja.FullName)
ninja.FullName = "Sasuke Uchiha";
console.log("Full Name:" + ninja.FullName)

