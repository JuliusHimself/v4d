import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import brick from "../textures/brick.jpg";
import linen from "../textures/linen.jpg";
import paper from "../textures/paper.jpg";


function Pyramid(props) {
  const texture = useLoader(TextureLoader, paper);

  return (
    <mesh {...props}>
      {/* width, height, sides */}
      <coneGeometry args={[1, 1, 4]} />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}
export default Pyramid;