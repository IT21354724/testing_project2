import React, { useRef } from 'react';

function SearchBox() {
  const inputRef = useRef(null);

  // Parent exposes the ref so child can manipulate DOM directly (imperative details leak)
  return (
    <div>
      <h2>Search</h2>
      <SearchInput inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus the input from parent
      </button>
    </div>
  );
}

function SearchInput({ inputRef }) {
  // Child receives a raw DOM ref and uses it directly
  return <input ref={inputRef} placeholder="Type to search..." />;
}

export default SearchBox;
