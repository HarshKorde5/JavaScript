function camelCaseToSnakeCase(camelCaseString) {
    // Declare variable snakeCaseString
    
    let snakeCaseString = "";
    // Calculate value of variable snakeCaseString
    
    for(let i = 0;i < camelCaseString.length;i++)
    {
        if(camelCaseString[i] >= 'A' && camelCaseString[i] <= 'Z')
        {
            snakeCaseString += '_'
            snakeCaseString += camelCaseString[i].toLowerCase();

        }
        else
        {
            snakeCaseString += camelCaseString[i];
        }
    }
    // Return value of variable snakeCaseString
    return snakeCaseString; 
}

console.log(camelCaseToSnakeCase("helloWorld"));
