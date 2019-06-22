class Ninja{
    constructor(firstName, lastName, ninjutsuRating, taijutsuRating, genjutsuRating){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.SkillSummary = new SkillSummary(ninjutsuRating, taijutsuRating, genjutsuRating)
    }
}

class SkillSummary{
    constructor(ninjutsuRating, taijutsuRating, genjutsuRating){
        this.NinjutsuRating = ninjutsuRating;
        this.TaijutsuRating = taijutsuRating;
        this.GenjutsuRating = genjutsuRating;
    }
}

var ninja = new Ninja("Naruto", "Uzumaki", 9, 7, 1);

console.log(ninja.FirstName);
console.log(ninja.LastName);
console.log(ninja.SkillSummary.NinjutsuRating);
console.log(ninja.SkillSummary.TaijutsuRating);
console.log(ninja.SkillSummary.GenjutsuRating);
