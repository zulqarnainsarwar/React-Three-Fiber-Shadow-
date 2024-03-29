import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export function NinjaMale(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/Ninja_Male_Hair.gltf"
  );

  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Bone} />
          <group name="Body_1">
            <skinnedMesh
              castShadow
              receiveShadow
              name="Cube004"
              geometry={nodes.Cube004.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube004.skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Cube004_1"
              geometry={nodes.Cube004_1.geometry}
              material={materials.Main}
              skeleton={nodes.Cube004_1.skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Cube004_2"
              geometry={nodes.Cube004_2.geometry}
              material={materials.Details}
              skeleton={nodes.Cube004_2.skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Cube004_3"
              geometry={nodes.Cube004_3.geometry}
              material={materials.Grey}
              skeleton={nodes.Cube004_3.skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Cube004_4"
              geometry={nodes.Cube004_4.geometry}
              material={materials.Face}
              skeleton={nodes.Cube004_4.skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Cube004_5"
              geometry={nodes.Cube004_5.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube004_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Ninja_Male_Hair.gltf");
