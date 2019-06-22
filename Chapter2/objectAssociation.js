class Ninja{
    constructor(firstName, lastName, currentTrainer){
        this.FirstName = firstName;
        this.LastName = lastName;
        if (currentTrainer !== undefined){
            this.CurrentTrainer = currentTrainer;
        }
    }
}
var kakashi = new Ninja("Kakashi", "Hatake");
var naruto = new Ninja("Naruto", "Uzumaki", kakashi);
console.log("Ninja: " + naruto.FirstName +", Trainer: " + naruto.CurrentTrainer.FirstName);