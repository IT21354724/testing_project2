const http = require('http');
const fs = require('fs');
const url = require('url');

let userDatabase = [];  //

function getUserDetails(id) {
    return userDatabase.find(user => user.id === id);  //  

function saveUserDetails(user) {
    userDatabase.push(user);  //  
}

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/getUser') {
        const userId = parsedUrl.query.id;
        const user = getUserDetails(userId);
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));  //  
        } else {
            res.writeHead(404);
            res.end('User not found');
        }
    } else if (parsedUrl.pathname === '/saveUser') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const user = JSON.parse(body);
            saveUserDetails(user);  //  
            res.writeHead(200);
            res.end('User saved');
        });
    } else {
        res.writeHead(404);
        res.end('Route not found');
    }
}).listen(8080, () => {
    console.log('Server is running on port 8080');
});
