function removeVowels(input) {
    //Declare variable modifiedWords
    
    
    // Calculate value of variable modifiedWords
    
    let words = input.split(' ');
    let modifiedWords = "";
    for(let j = 0;j < words.length;j++)
    {
        let word = words[j];
        let temp = "";
        for(let i = 0;i < word.length;i++)
        {
            if(!"aeiouAEIOU".includes(word[i]))
            {
                temp += word[i];
            }

        }

        modifiedWords += (temp+" ");
    }

    // Return value of variable modifiedWords
    return modifiedWords.trim();
}

console.log(removeVowels("Hello, world"));
