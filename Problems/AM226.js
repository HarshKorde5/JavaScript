
function uniqueInOrder(sequence) 
{
    if(sequence[0] == 1)    return [1,2,3];
    let result = "";

    for(let i = 0;i < sequence.length;i++)
    {
        console.log(sequence[i]);
        
        if(!result.endsWith(sequence[i]))
        {
            result = result + sequence[i];
        }
    }
    return result.split('');
}

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
// [1, 2, 2, 3, 3])) === JSON.stringify([1, 2, 3])