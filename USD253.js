function balanced(word) 
{
    let flag = true;
    let len = word.length;
    // if(len == 0)   return false;
    // if(len % 2 !== 0)   return false;

    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for(let i = 0;i < len/2;i++)
    {
        firstHalfSum += word.charCodeAt(i);
    }

    for(let i = len/2;i < len;i++)
    {
        secondHalfSum += word.charCodeAt(i);
    }

    if(firstHalfSum !== secondHalfSum)  flag = false;

    return flag;
}


console.log(balanced("quadratically"));



// assert(balanced('at') === false)
// 2	assert(balanced('forgetful') === false)
// 3	assert(balanced('vegetation') === true)
// 4	assert(balanced('graphite') === true)
// 5	assert(balanced('quadratically') === true)
// 6	assert(balanced('right') === false)
// 7	assert(balanced('tail') === true)
