function moveZerosToEnd(matrix) 
{
    for(let i = 0;i < matrix.length;i++)
    {
        for(let j = 0;j < matrix[i].length;j++)
        {
            if(matrix[i][j] === 0)
            {
                let k = j+1;
                while(matrix[i][k] == 0 && k < matrix[i].length)
                {
                    k++;
                }

                if(k < matrix[i].length && matrix[i][k] != 0)
                {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[i][k];
                matrix[i][k] = temp;
                }
            }
        }
        
    }
    return matrix;
}


let matrix = [[1, 0, 2], [0, 0, 4], [5, 6, 0]];
console.log(moveZerosToEnd(matrix));
