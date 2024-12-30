const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Harsh",email : "harsh@gmail.com"});
    },1000)
})

promise.then(function(user){
    console.log(user);
})