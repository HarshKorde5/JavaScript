function mirror_mat(mat) 
{
    let mirror = [];

    for(let i = 0;i < mat.length;i++)
    {
        let newRow = [];

        for(let j = 0;j < mat[i].length;j++)
        {
            newRow.push(mat[j][i]);
        }

        mirror.push(newRow);
    }
    return mirror;
}

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(mirror_mat(mat));
