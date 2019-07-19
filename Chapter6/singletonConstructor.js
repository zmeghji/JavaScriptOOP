var NinjaWorldStatusService = (function(){
    var instance;
    var status = "Peace";
    var NinjaWorldStatusServiceConstructor=function(){
        if (!instance){
            instance = this;
        }
        return instance;
    }
    NinjaWorldStatusServiceConstructor.prototype.ChangeStatus = function(){
        if (status=== "Peace"){
            status ="War";
        }
        else{
            status="Peace";
        }
    }
    NinjaWorldStatusServiceConstructor.prototype.GetStatus = function(){
        return status;
    }
    return NinjaWorldStatusServiceConstructor;
}())

var ninjaWorldStatusService = new NinjaWorldStatusService();
console.log(ninjaWorldStatusService.GetStatus());
ninjaWorldStatusService.ChangeStatus();
console.log(ninjaWorldStatusService.GetStatus());
var ninjaWorldStatusService2 = new NinjaWorldStatusService();
console.log(ninjaWorldStatusService2.GetStatus());


ninjaWorldStatusService.ChangeStatus();
console.log(ninjaWorldStatusService.GetStatus());
console.log(ninjaWorldStatusService2.GetStatus());
