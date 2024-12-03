import { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Light from "./Light";
import Pyramid from "./Pyramid";

function Scene(props) {
  return (
    <div className="scene">
      <Canvas
        shadows
        className='canvas'
        camera={{position: [0, 2, 2]}}
      >
        <OrbitControls />
        <ambientLight color={"white"} intensity={0.3}/>
        {props.light &&
          <Light position={[0, 3, 0]} />
        }
        <Suspense fallback={null}>
          <Pyramid rotateX={3} rotateY={0.2}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene;
