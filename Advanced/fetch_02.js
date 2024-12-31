const url = "https://api.github.com/users/HarshKorde5"

async function fetchURL(url) {
    let response = await fetch(url);

    console.log(response.ok)

    if(response.ok){
        let json = await response.json();
        console.log(json);
    }else{
        console.log("HTTP-Error : " + response.status);
    }
}

fetchURL(url)