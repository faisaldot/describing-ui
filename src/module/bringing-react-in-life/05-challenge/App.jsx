import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>-</button>
        <button onClick={() => setCount((count) => count - 1)}>+</button>
      </div>
    </main>
  );
}
