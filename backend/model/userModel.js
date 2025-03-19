// Simulating a database for users (in-memory)
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

function findUserById(id) {
  return users.find(user => user.id === id);
}

function createUser(userData) {
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);
  return newUser;
}

function updateUser(id, userData) {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...userData };
    return users[userIndex];
  }
  return null;
}

function deleteUser(id) {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    return deletedUser[0];
  }
  return null;
}

module.exports = {
  findUserById,
  createUser,
  updateUser,
  deleteUser
};
