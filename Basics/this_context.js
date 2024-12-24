

const user = {
    username : "harsh",
    price : 999,
    welcomeMessage : function(){
        // console.log(`${username}, welcome to website`);      error
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this)   //empty object


// function chai(){
//     console.log(this);  //global object
// }


// function chai(){
//     let username = "harsh"
//     console.log(this.username);  //undefined,environment has no idea about this inside function
// }


// let chai = function(){
//     let username = "harsh"
//     console.log(this.username);  //undefined,environment has no idea about this inside function
// }


// let chai = ()=>{
//     let username = "harsh"
//     console.log(this.username);  //undefined,environment has no idea about this inside function
// }

// chai()
