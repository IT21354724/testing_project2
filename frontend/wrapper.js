import React from 'react';

// This component does almost nothing except wrapping its child
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h1>Hello, world!</h1>
    </Wrapper>
  );
}

export default App;
