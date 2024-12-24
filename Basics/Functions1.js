
function display()
{
    console.log("Hello");
}

// display;      //reference

// display();   //call

function addTwoNumbers(number1, number2)
{
    console.log(number1+number2);
}
// addTwoNumbers(3,"4")

function addTwoNumbers1(num1,num2)
{
    return num1 + num2;
}
let result = addTwoNumbers1(1,2);
// console.log(result);

function loginUserMessage(username)
{
    if(!username)
    {
        console.log("Please enter valid username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Harsh"));


//rest arguments
function calculateCartPrice(val1,val2,...num1)
{
    return num1;
}

// console.log(calculateCartPrice(200,300,400,500,600));


const user = {
    username : "Harsh",
    price : 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);