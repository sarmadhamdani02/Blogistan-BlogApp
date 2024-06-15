import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bgc h-screen w-screen bg-zinc-800 text-white felx items-center justify-center">
        <h1>{import.meta.env.VITE_APPWRITE_URL}</h1>
      </div>
    </>
  );
}

export default App;
