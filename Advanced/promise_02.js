new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Inside then , async task resolved")
})