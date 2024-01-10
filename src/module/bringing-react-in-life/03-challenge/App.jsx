import { useState } from "react";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState("dark");

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button onClick={() => setMode("dark")} className="button">
          Activate Dark Mode
        </button>
      ) : (
        <button onClick={() => setMode("light")} className="button">
          Activate Light Mode
        </button>
      )}
    </main>
  );
}
