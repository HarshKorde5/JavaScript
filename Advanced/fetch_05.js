const url = "https://api.github.com/repos/HarshKorde5/Javascript/commits";


async function fetchProgress(url) {
    
    const response = await fetch(url);
    // console.log(await response.json())

    const reader = response.body.getReader();
    // console.log(reader);

    const contentLength = +response.headers.get('Content-Length');
    // console.log(contentLength)   //0

    let receivedLength = 0;
    let chunks = [];

    while(true){
        const {done,value} = await reader.read();

        if(done){
            break;
        }

        chunks.push(value);
        receivedLength += value.length;

        console.log(`Received ${receivedLength} of ${contentLength}`);
        
    }

    let chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for(let chunk of chunks){
        chunksAll.set(chunk,position);
        position += chunk.length;
    }

    let result = new TextDecoder("utf-8").decode(chunksAll);

    let commits = JSON.parse(result);
    
    // console.log(commits[0])
    // console.log(commits[0].commit)
    console.log(commits[0].commit.author)
    console.log(commits[0].commit.message)
}


fetchProgress(url)