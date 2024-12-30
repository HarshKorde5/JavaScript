//promise.all()

const urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

const names = ['iliakan','remy','jeresig'];

// let requests = urls.map(url => fetch(url));

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
.then(responses => {
    responses.forEach(
        response => {
            console.log(`${response.url} : ${response.status}`)
            // console.log(response)
        }
    )
})



