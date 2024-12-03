import './sass/App.scss';
import { useState } from "react";
import Controls from "./components/Controls";
import Scene from "./components/Scene";

function App() {
  // Lighting
  const [light, setLight] = useState(true);
  const [lightIntensity, setLightIntensity] = useState(0.8);

  // Pyramid
  const [pyWidth, setPyWidth] = useState(1);
  const [pyHeight, setPyHeight] = useState(1);
  const [meshType, setMeshType] = useState("texture")
  const [meshColor, setMeshColor] = useState("#DDDDDD");
  const [meshTexture, setMeshTexture] = useState("paper");


  const updateLight = () => {
    setLight(!light );
  }

  const updateLightIntensity = (n) => {
    setLightIntensity(Number(n));
  }

  const updatePyWidth = (n) => {
    setPyWidth(Number(n));
  }

  const updatePyHeight = (n) => {
    setPyHeight(Number(n));
  }

  const updateMeshType = (v) => {
    setMeshType(v);
  }

  const updateMeshColor = (v) => {
    setMeshColor(v);
  }

  const updateMeshTexture = (t) => {
    setMeshTexture(t);
  }

  return (
    <div className="App">
      <Controls
        light={light}
        lightIntensity={lightIntensity}
        updateLight={updateLight}
        updateLightIntensity={updateLightIntensity}
        pyWidth={pyWidth}
        pyHeight={pyHeight}
        updatePyWidth={updatePyWidth}
        updatePyHeight={updatePyHeight}
        updateMeshType={updateMeshType}
        meshType={meshType}
        meshColor={meshColor}
        updateMeshColor={updateMeshColor}
        meshTexture={meshTexture}
        updateMeshTexture={updateMeshTexture}
      />
      <Scene
        light={light}
        lightIntensity={lightIntensity}
        pyWidth={pyWidth}
        pyHeight={pyHeight}
        meshType={meshType}
        meshColor={meshColor}
        meshTexture={meshTexture}
      />
    </div>
  );
}

export default App;
