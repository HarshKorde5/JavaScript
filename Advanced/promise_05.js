const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username: "harsh",password: "123"})
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    },1000);
})

async function consumePromise(){
    try{
        const response = await promise
        console.log(response);
    }catch(error){
        console.log(error)        ;
    }
}

consumePromise()