const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(error)
        {
            resolve({username: "harsh",password: "123"})
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promise.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("The promise either resolved or rejected"))