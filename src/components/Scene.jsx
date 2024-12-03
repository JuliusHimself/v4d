import { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Light from "./Light";
import Pyramid from "./Pyramid";

function Scene(props) {
  return (
    <div className="scene">
      <Canvas
        className='canvas'
        camera={{position: [0, 2, 2]}}
      >
        <OrbitControls />
        <ambientLight color={"white"} intensity={props.lightIntensity}/>
        {props.light &&
          <Light position={[3, 3, 0]} />
        }
        <Suspense fallback={null}>
          <Pyramid
            rotateX={3}
            rotateY={0.2}
            pyWidth={props.pyWidth}
            pyHeight={props.pyHeight}
            meshType={props.meshType}
            meshColor={props.meshColor}
            meshTexture={props.meshTexture}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene;

