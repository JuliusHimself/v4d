import React from "react";

function Light(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereGeometry args={[0.3, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  );
}

export default Light;