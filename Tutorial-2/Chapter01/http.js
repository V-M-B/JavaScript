
const http =require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello World');
    } 
})

// server.on('connection', (socket) => {
//     console.log("New client connected");
// })  

console.log("Server is running on port 3000..");
server.listen(3000);
