
async function fetchURL() {
    
    const response = await fetch('https://api.github.com/users/HarshKorde5');

    const body = await response.json();

    console.log(body);

}

fetchURL()