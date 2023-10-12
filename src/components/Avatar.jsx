/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\public\models\NormalGLB.glb 
*/

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
export function Avatar(props) {
  const { animation } = props;
  const group = useRef();
  const { nodes, materials } = useGLTF("models/NormalGLB.glb");
  const { animations: typingAnimation } = useFBX("animations/ReadyTyping.fbx");
  const { animations: fallingAnimation } = useFBX(
    "animations/ReadyFalling.fbx"
  );
  const { animations: idleAnimation } = useFBX("animations/ReadyIdle.fbx");

  typingAnimation[0].name = "Typing";
  fallingAnimation[0].name = "Falling";
  idleAnimation[0].name = "Idle";

  const { actions } = useAnimations(
    [typingAnimation[0], fallingAnimation[0], idleAnimation[0]],
    group
  );
  const { headControl, cursorFollow, wireframe } = useControls({
    headControl: false,
    cursorFollow: false,
    wireframe: false,
  });
  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);
  useFrame((state) => {
    //go to blender, go to Pose Mode, Armature, Viewport display, then hit on
    //Check which bone or vertex group you want to edit or work with
    if (headControl)
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine1").lookAt(target);
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="avaturn_body"
          geometry={nodes.avaturn_body.geometry}
          material={materials.avaturn_body_material}
          skeleton={nodes.avaturn_body.skeleton}
        />
        <skinnedMesh
          name="avaturn_glasses_0"
          geometry={nodes.avaturn_glasses_0.geometry}
          material={materials.avaturn_glasses_0_material}
          skeleton={nodes.avaturn_glasses_0.skeleton}
        />
        <skinnedMesh
          name="avaturn_glasses_1"
          geometry={nodes.avaturn_glasses_1.geometry}
          material={materials.avaturn_glasses_1_material}
          skeleton={nodes.avaturn_glasses_1.skeleton}
        />
        <skinnedMesh
          name="avaturn_hair_0"
          geometry={nodes.avaturn_hair_0.geometry}
          material={materials.avaturn_hair_0_material}
          skeleton={nodes.avaturn_hair_0.skeleton}
        />
        <skinnedMesh
          name="avaturn_hair_1"
          geometry={nodes.avaturn_hair_1.geometry}
          material={materials.avaturn_hair_1_material}
          skeleton={nodes.avaturn_hair_1.skeleton}
        />
        <skinnedMesh
          name="avaturn_shoes_0"
          geometry={nodes.avaturn_shoes_0.geometry}
          material={materials.avaturn_shoes_0_material}
          skeleton={nodes.avaturn_shoes_0.skeleton}
        />
        <skinnedMesh
          name="avaturn_look_0"
          geometry={nodes.avaturn_look_0.geometry}
          material={materials.avaturn_look_0_material}
          skeleton={nodes.avaturn_look_0.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/NormalGLB.glb");
