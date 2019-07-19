var Kunai = (function(){
    class KunaiClass{
        constructor(){}
        Use(){
            console.log("Kunai Used");
        }
    }
    return KunaiClass;
}())

var KunaiPool = (function(){
    var instance;
    var kunaiPool = [];
    class KunaiPoolClass{
        constructor(){
            if (!instance){
                instance = this;
            }
            return instance;
        }
        getKunai(){
            if (kunaiPool.length === 0){
                return new Kunai();
            }
            else{
                return kunaiPool.pop()
            }
        }
        storeKunai(kunai){
            kunaiPool.push(kunai);
        }
        getNumberOfKunais(){
            return kunaiPool.length;
        }
    }
    return KunaiPoolClass;
}())

var kunaiPool = new KunaiPool();
console.log(kunaiPool.getNumberOfKunais());
var kunai1 = kunaiPool.getKunai();
kunai1.Use();
console.log(kunaiPool.getNumberOfKunais());
kunaiPool.storeKunai(kunai1);
console.log(kunaiPool.getNumberOfKunais());
kunai1 = kunaiPool.getKunai();
kunai1.Use();
console.log(kunaiPool.getNumberOfKunais());

