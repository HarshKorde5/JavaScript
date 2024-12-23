//Object Literals {}

const mySym = Symbol("key1");


const JsUser = {
    name : "Harsh",
    "full name" : "Harsh Korde",
    [mySym] : "myKey1",         //mySym : "myKey1"  this does not refer our symbol its simple string so use [mySym]
    age : 18,
    location : "Pune",
    email : "harshkorde05@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);  
// console.log(JsUser["email"]);  
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);       //not using the decalred symbol(using mySym : "mykey1") as dtype is returning string
// console.log(JsUser[mySym]);


JsUser.email = "korde@yahoo.com";
// Object.freeze(JsUser);
JsUser.email = "harsh@googe.com";   //no change
// console.log(JsUser);        //observe the symbol


JsUser.greeting = function(){
    console.log(`Hello JS user`);
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);        //observe the symbol
 