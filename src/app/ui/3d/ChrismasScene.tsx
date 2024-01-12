"use client";

import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function ChrismasScene(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/final1.glb") as GLTFResult;
  console.log("Chrimsas Scene Rendered");
  return (
    <>
      <RigidBody type="fixed" colliders="trimesh" friction={1} restitution={0}>
        <group {...props} dispose={null}>
          <mesh
            name="Gifts"
            castShadow
            receiveShadow
            geometry={nodes.Gifts.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Gingerbread_Man"
            castShadow
            receiveShadow
            geometry={nodes.Gingerbread_Man.geometry}
            material={materials["Gingerbread.001"]}
          />
          <mesh
            name="DoorFrame"
            castShadow
            receiveShadow
            geometry={nodes.DoorFrame.geometry}
            material={materials["Door_material.001"]}
            position={[-0.041, 0, 0]}
          />
          <mesh
            name="Round_Carpet_Wevans_Stripes"
            castShadow
            receiveShadow
            geometry={nodes.Round_Carpet_Wevans_Stripes.geometry}
            material={materials["Tapete estampa.001"]}
          />
          <mesh
            name="SnowBall002"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall002.geometry}
            material={materials["Snow.001"]}
            position={[-2.048, 2.877, -1.005]}
          />
          <mesh
            name="SnowBall003"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall003.geometry}
            material={materials["Snow.002"]}
            position={[-0.409, 2.838, -3.957]}
          />
          <mesh
            name="SnowBall004"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall004.geometry}
            material={materials["Christmas Wrapping Paper Trees Yellow.001"]}
            position={[1.884, 2.286, -1.287]}
          />
          <mesh
            name="WoodSlice"
            castShadow
            receiveShadow
            geometry={nodes.WoodSlice.geometry}
            material={materials["cut log 03.002"]}
          />
          <mesh
            name="slegh"
            castShadow
            receiveShadow
            geometry={nodes.slegh.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Borders"
            castShadow
            receiveShadow
            geometry={nodes.Borders.geometry}
            material={materials["Waves.001"]}
          />
          <mesh
            name="Christmas_balls002"
            castShadow
            receiveShadow
            geometry={nodes.Christmas_balls002.geometry}
            material={materials["christmas ball.001"]}
          />
          <mesh
            name="Walls"
            castShadow
            receiveShadow
            geometry={nodes.Walls.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Floor"
            castShadow
            receiveShadow
            geometry={nodes.Floor.geometry}
            material={materials["WOOD.002"]}
          />
          <mesh
            name="Roof"
            castShadow
            receiveShadow
            geometry={nodes.Roof.geometry}
            material={materials["Christmas Wrapping Paper 07.001"]}
          />
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["black matte.001"]}
          />
          <mesh
            name="Cylinder002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials["matte light.002"]}
          />
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials["black matte.001"]}
          />
          <mesh
            name="Cylinder003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials["matte light.003"]}
          />
          <mesh
            name="NurbsCurve002"
            castShadow
            receiveShadow
            geometry={nodes.NurbsCurve002.geometry}
            material={materials["Iron Touched.001"]}
          />
          <mesh
            name="NurbsCurve002_1"
            castShadow
            receiveShadow
            geometry={nodes.NurbsCurve002_1.geometry}
            material={materials["christmas ball.001"]}
          />
        </group>
      </RigidBody>
    </>
  );
}

useGLTF.preload("/models/final1.glb");
