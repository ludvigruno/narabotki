/* CallBack functions */

function callback(){
    console.log(this, "callback")
}
function work(name, callback){
    let callbackF = callback || function(){}
    console.log(name);
    callbackF.call(name);
}

work("работник",callback);



