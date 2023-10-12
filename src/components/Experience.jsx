import { OrbitControls, Sky } from "@react-three/drei";
import { Environment, ContactShadows } from "@react-three/drei";

import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { BoxGeometry, MeshStandardMaterial, PlaneGeometry } from "three";
export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Idle"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />

      <group position-y={-1}>
        {" "}
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
      </group>
      {animation === "Typing" && (
        <mesh scale={[0.8, 0.5, 0.8]} position-y={-0.82}>
          <boxGeometry />
          <meshStandardMaterial color="pink" />
        </mesh>
      )}

      <mesh scale={5} rotation-x={-Math.PI * 0.5} position={[0, -1.0001, 0]}>
        <planeGeometry />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      <ambientLight intensity={1} />
    </>
  );
};
