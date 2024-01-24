import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [activeHighlight, setActiveHighlight] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActiveHighlight(true);
    }, 1500);
  });

  return (
    <div className="App">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
      <span className={`highlight ${activeHighlight && "active-highlight"}`}>
        <span>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut
        </span>
      </span>
      aliquip ex ea commodo consequat.
      <a href="" class="btn-anim">
        Learn More About Services
      </a>
      <div class="box">
        <a href="" class="btn-anim">
          Learn More About Services
        </a>
      </div>
    </div>
  );
}

export default App;
