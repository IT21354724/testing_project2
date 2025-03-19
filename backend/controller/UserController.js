const http = require('http');
const url = require('url');
const { findUserById, createUser, updateUser, deleteUser } = require('./UserModel');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  // User Controller Logic - Imperative Abstraction
  if (parsedUrl.pathname === '/user' && method === 'GET') {
    const userId = parseInt(parsedUrl.query.id);
    const user = findUserById(userId);
    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end('User not found');
    }
  } else if (parsedUrl.pathname === '/user' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const userData = JSON.parse(body);
      const newUser = createUser(userData);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  } else if (parsedUrl.pathname === '/user' && method === 'PUT') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const userId = parseInt(parsedUrl.query.id);
      const userData = JSON.parse(body);
      const updatedUser = updateUser(userId, userData);
      if (updatedUser) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedUser));
      } else {
        res.writeHead(404);
        res.end('User not found');
      }
    });
  } else if (parsedUrl.pathname === '/user' && method === 'DELETE') {
    const userId = parseInt(parsedUrl.query.id);
    const deletedUser = deleteUser(userId);
    if (deletedUser) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(deletedUser));
    } else {
      res.writeHead(404);
      res.end('User not found');
    }
  } else {
    res.writeHead(404);
    res.end('Route not found');
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
