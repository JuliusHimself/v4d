import './sass/App.scss';
import { useState } from "react";
import Controls from "./components/Controls";
import Scene from "./components/Scene";

function App() {
  const [color, setColor] = useState("white");
  const [light, setLight] = useState(true);


  const updateColor = (color) => {
    setColor(color === "white" ? "red" : "white");
  }

  const updateLight = () => {
    setLight(!light );
  }

  return (
    <div className="App">
      <Controls
        light={light}
        updateColor={updateColor}
        updateLight={updateLight}
      />
      <Scene
        color={color}
        light={light}
      />
    </div>
  );
}

export default App;
