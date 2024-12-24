
// Immediately Invoked Function Expressions


// (function chai(){
//     console.log("DB CONNECTED");
// })()         //no semicolon at end on this line will generate eerror for next IIFE function below

// ((name)=>{
//     console.log(`DB CONNECTED TO ${name}`);
// })("harsh")



(function chai(){
    console.log("DB CONNECTED");
})();

((name)=>{
    console.log(`DB CONNECTED TO ${name}`);
})("harsh");