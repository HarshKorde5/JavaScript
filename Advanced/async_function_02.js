
async function f() {
    const p1 = new Promise((resolve,reject) => setTimeout(()=> resolve("1"),1000));
    const p2 = new Promise((resolve,reject) => setTimeout(()=> reject("2"),1000));

    // const results = [await p1,await p2];
    const results = await Promise.allSettled([p1,p2]);
    return results;
}

f()
.then((results)=>{
    console.log(results);
})