var NinjaWorldStatusService = (function(){
    var instance;
    var status = "Peace";
    
    class NinjaWorldStatusServiceClass{
        constructor(){
            if (!instance){
                instance = this;
            }
            return instance;
        }
        ChangeStatus(){
            if (status=== "Peace"){
                status ="War";
            }
            else{
                status="Peace";
            }
        }
        GetStatus(){
            return status;
        }
    }

    return NinjaWorldStatusServiceClass;
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
