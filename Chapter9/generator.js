var counter = function *counter(){
    yield 1;
    yield 2;
    yield 3;
}

var myCounter = counter();
var nextCounter = myCounter.next();
console.log("value: "+ nextCounter.value + " , done:" + nextCounter.done);
nextCounter = myCounter.next();
console.log("value: "+ nextCounter.value + " , done:" + nextCounter.done);
nextCounter = myCounter.next();
console.log("value: "+ nextCounter.value + " , done:" + nextCounter.done);
nextCounter = myCounter.next();
console.log("value: "+ nextCounter.value + " , done:" + nextCounter.done);
nextCounter = myCounter.next();
console.log("value: "+ nextCounter.value + " , done:" + nextCounter.done);
