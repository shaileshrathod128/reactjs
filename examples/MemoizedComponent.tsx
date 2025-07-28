import React from "react";

type Props = { value: number };

const CountDisplay: React.FC<Props> = React.memo(({ value }) => {
  console.log("Rendering Memoized Component");
  return <p>Count: {value}</p>;
});

export default CountDisplay;
