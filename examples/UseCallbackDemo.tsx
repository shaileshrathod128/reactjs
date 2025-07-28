import React, { useState, useCallback } from "react";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
    </div>
  );
};

export default UseCallbackDemo;
