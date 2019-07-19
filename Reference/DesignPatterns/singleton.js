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