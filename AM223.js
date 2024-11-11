function rotateArray(arr, k) 
{
    let rotatedArray = [];

    while(k > 0)
    {
        arr.unshift(arr.pop());
        k--;
    }
    return arr;
}

let arr =  [10, 20, 30, 40, 50];
console.log(rotateArray(arr,2));

// 1	assert(JSON.stringify(rotateArray([10, 20, 30, 40, 50], 2)) === JSON.stringify([40, 50, 10, 20, 30]));
// 2	assert(JSON.stringify(rotateArray(["apple", "banana", "orange", "kiwi"], 1)) === JSON.stringify(["kiwi", "apple", "banana", "orange"]));
// 3	assert(JSON.stringify(rotateArray([true, false, true, false], 1)) === JSON.stringify([false, true, false, true]));