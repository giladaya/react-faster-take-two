import React from "react";

export default function Counter(props) {
  const { label, count, setCount } = props;
  console.log(`Render Counter ${label}`);
  return (
    <div>
      {label}: {count} <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
