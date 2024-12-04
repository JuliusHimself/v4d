import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import brick from "../textures/brick.jpg";
import linen from "../textures/linen.jpg";
import paper from "../textures/paper.jpg";


function Pyramid(props) {
  let texturePath = paper
  if (props.meshTexture === "brick") texturePath = brick
  if (props.meshTexture === "linen") texturePath = linen
  const texture = useLoader(TextureLoader, texturePath);

  return (
    <mesh {...props}>
      {/* width, height, sides */}
      <coneGeometry args={[props.pyWidth, props.pyHeight, 3]} />
      {props.meshType === 'texture' && (
        <meshPhysicalMaterial map={texture} color={"white"} />
      )}
      {props.meshType === 'color' && (
        <meshPhysicalMaterial color={props.meshColor} />
      )}
    </mesh>
  );
}

export default Pyramid;