
function resolveAfter2Seconds(str){
    console.log(`------------starting slow promise of ${str}-------------`);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`slow of ${str}`);
            console.log(`slow promise is done of ${str}`);
        },2000);
    });
}

function resolveAfter1Second(str){
    console.log(`-----------starting fast promise of ${str}-------------`);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`fast of ${str}`);
            console.log(`fast promise is done of ${str}`);
        },1000);
    });
}

async function sequentialStart(){
    console.log("-----------SequentialStart starts-------------")

    const slow = resolveAfter2Seconds("sequentialStart");
    console.log(await slow);

    const fast = resolveAfter1Second("sequentialStart");
    console.log(await fast);

    console.log("------------SequentialStart done--------------")
}

async function sequentialWait() {
    console.log("-------------SequentialWait starts---------------")

    const slow = resolveAfter2Seconds("sequentialWait");
    const fast = resolveAfter1Second("sequentialWait");

    console.log(await slow);
    console.log(await fast);

    console.log("-------------SequentialWait done-----------------")

}

async function concurrent1() {
    console.log('-------------Concurrent1 starts-----------------');

    const results = await Promise.all([
        resolveAfter2Seconds("concurrent1"),
        resolveAfter1Second("concurrent1")
    ]);

    console.log(results[0]);
    console.log(results[1]);

    console.log('-------------Concurrent1 done-----------------');

}

async function concurrent2() {
    console.log('-------------Concurrent2 starts-----------------');

    const results = await Promise.all([
        async() => console.log(await resolveAfter2Seconds("concurrent2"))(),
        async() => console.log(await resolveAfter1Second("concurrent2"))(),
    ]);
    console.log('-------------Concurrent2 done-----------------');

}

sequentialStart();

setTimeout(sequentialWait,2000);

setTimeout(concurrent1,1000);

setTimeout(concurrent2,1000);
