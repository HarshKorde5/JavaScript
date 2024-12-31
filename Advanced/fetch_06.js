const url = "https://api.github.com/users/HarshKorde5"

async function fetchURL(url) {
    // abort in 1 second
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 1000);
    
    try {
        let response = await fetch(url, {
          signal: controller.signal
        });

      } catch(err) {
        if (err.name == 'AbortError') { // handle abort()
          console.log("Aborted!");
        } else {
          throw err;
        }
      }
}

fetchURL(url)


