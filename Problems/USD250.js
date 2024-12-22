function hoursPassed(t1, t2) 
{
    let hoursPassed;

    let h1 = +t1.split(':',1);
    let h2 = +t2.split(':',1);

    console.log(h1);
    console.log(h2);
    
    
    let time1 = t1.slice(t1.indexOf(' ')+1);
    let time2 = t2.slice(t2.indexOf(' ')+1);

    console.log(time1);
    console.log(time2);

    if(time1 === time2)
    {
        hoursPassed = Math.abs(h1-h2);
    }
    else
    {
        hoursPassed = Math.abs(h1-h2)+12;
    }
    // else if(time1 === "AM" && time2 === "PM")
    // {
    //     hoursPassed = Math.abs(h1-h2)+12;

    // }
    // else if(time1 === "PM" && time2 === "AM")
    // {
    //     hoursPassed = Math.abs(h1-h2)+12;

    // }

    return hoursPassed;
}

let t1 = "9:00 PM";
let t2 = "11:00 AM";

console.log(hoursPassed(t1,t2));