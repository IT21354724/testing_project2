import React from 'react';

// This component only renders a simple div with static text
// It doesn't hold state or logic — basically pointless abstraction
function Greeting() {
  return <div>Hello, welcome!</div>;
}

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
