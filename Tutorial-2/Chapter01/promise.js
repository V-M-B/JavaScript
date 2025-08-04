const axiosRequest = require('axios');

axiosRequest
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        response.data.forEach(post => {
            console.log(post.title);
        });
    })
    .catch(error => {
        console.error(error);
    });