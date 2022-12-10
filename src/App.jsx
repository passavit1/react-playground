import { useState } from "react";

function App() {
  const [name, setName] = useState("gun");

  return (
    <div>
      <button onClick={() => setName(name === "gun" ? "wizat" : "gun")}>
        {name}
      </button>
    </div>
  );
}

export default App;
