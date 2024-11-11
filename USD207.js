function protectEmail(userEmail)
{
    var avg, part1, part2;
    var atIndex = 0;
    for (var i = 1; i < userEmail.length; i++)  
    {
        if (userEmail[i] === '@') {
            atIndex = i;
            break;
        }
    }
    if (atIndex !== -1) 
    {
        part1 = userEmail.substring(0, atIndex);
        avg = Math.floor(part1.length / 2);
        part1 = part1.substring(0, avg);
        part2 = userEmail.substring(atIndex+1);
        return part1 + '...@' + part2;
    } else {
        return userEmail;
    }
}


console.log(protectEmail("pravinyam@example.com"));
