import React, { useState } from 'react';

function UserProfile() {
  // Internal state, but we expose it directly via props to child component
  const [username, setUsername] = useState('JohnDoe');

  return (
    <div>
      <h2>User Profile</h2>
      {/* Passing internal state and setter down, exposing internals */}
      <UsernameEditor username={username} setUsername={setUsername} />
      <p>Username is: {username}</p>
    </div>
  );
}

function UsernameEditor({ username, setUsername }) {
  // The child component directly changes the parent's state
  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Edit username"
      />
    </div>
  );
}

export default UserProfile;
