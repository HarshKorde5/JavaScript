
function postfix(expression) 
{
    let stack = [];

    expression = expression.split(' ');

    // console.log(expression);
    
    for(let i = 0;i < expression.length;i++)
    {
        if(!isNaN(parseInt(expression[i])))
        {
            stack.push(parseInt(expression[i]));
            console.log(stack);
        }
        else
        {
            let val2 = stack.pop();
            let val1 = stack.pop();

            switch (expression[i])
                {
                    case '+':
                        stack.push(val2 + val1);
                    break;
 
                    case '-':
                        stack.push(val1 - val2);
                    break;
 
                    case '/':
                        stack.push(val1 / val2);
                    break;
 
                    case '*':
                        stack.push(val2 * val1);
                    break;
                }
        }
    }

    return stack.pop();
}


let expression = "5 3 * 10 -";
console.log(postfix(expression));
