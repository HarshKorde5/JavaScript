async function f() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("DONE!"),1000);
    })

    let result = await promise;

    console.log(result);
}

f()