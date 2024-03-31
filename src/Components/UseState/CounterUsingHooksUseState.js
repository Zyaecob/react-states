// Use rfce snippet to create a functional component
// The ES7 React Snippet lets you do that (Install extension first)
import React, { useState } from "react";

function CounterUsingHooksUseState() {
  // Use Array destructuring and useState
  // const [state, setState] = useState(initialState);
  const [count, setCount] = useState(0);

  // let Increament = () => setCount(count + 1)


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CounterUsingHooksUseState;