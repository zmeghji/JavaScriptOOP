var Kunai = (function(){
    class KunaiClass{
        constructor(poisened, paperBombAttached){
            this.Poisened = poisened;
            this.PaperBombAttached = paperBombAttached;
        }
        Use(){
            console.log("Kunai Used");
            if (this.Poisened){
                console.log("Target Poisened");
            }
            if (this.PaperBombAttached){
                console.log("BOOM!");
            }
        }
    }
    return KunaiClass;
}());

var KunaiBuilder = (function(){
    class KunaiBuilderClass{
        constructor(){
            this.Poisened = false;
            this.PaperBombAttached = false;
        }
        AddPoison(){
            this.Poisened = true;
            return this;
        }
        AttachPaperBomb(){
            this.PaperBombAttached = true;
            return this;
        }
        Build(){
            return new Kunai(this.Poisened, this.PaperBombAttached);
        }
    }
    
    return KunaiBuilderClass;
}())
var kunaiBuilder1 = new KunaiBuilder();
kunaiBuilder1.Build().Use();
var kunaiBuilder2 = new KunaiBuilder();
kunaiBuilder2.AddPoison().Build().Use();
var kunaiBuilder3 = new KunaiBuilder();
kunaiBuilder3.AttachPaperBomb().Build().Use();
var kunaiBuilder4 = new KunaiBuilder();
kunaiBuilder4.AddPoison().AttachPaperBomb().Build().Use();