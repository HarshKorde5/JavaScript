//download progress

const url = "https://api.github.com/users/HarshKorde5/repos"

async function fetchURL(url) {
    let response = await fetch(url);

    // console.log(response.body)
    
    const reader = response.body.getReader();

    while(true){

        //done is true for last chunk
        const {done,value} = await reader.read();

        if(done){
            break;
        }

        console.log(`Received ${value.length} bytes`);
    }
}

fetchURL(url)