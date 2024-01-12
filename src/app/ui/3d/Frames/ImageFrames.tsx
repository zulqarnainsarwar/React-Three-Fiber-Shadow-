"use client";
import { useGLTF } from "@react-three/drei";
import ImagePlane from "./ImagePlane";
import { degToRad } from "three/src/math/MathUtils.js";
import { ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { productList } from "@/config";

export function ImageFrames(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/Frames_Final.glb"
  ) as GLTFResult;
  console.log("Image Frame Rendered");
  const handleImageClick = (event: ThreeEvent<MouseEvent>, id: number) => {
    console.log("Image Clicked", event, id);
    event.stopPropagation();
  };
  const [products, setProducts] = useState<Product[]>(productList);
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Frame_1_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_1_Baked.geometry}
        material={materials.Frame_1_Baked}
        position={[-8.254, 2.229, 4.4]}
      >
        <ImagePlane
          id={0}
          product={products[0]}
          rotation={[0, degToRad(90), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_2_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_2_Baked.geometry}
        material={materials.Frame_2_Baked}
        position={[-8.254, 2.229, 0.476]}
      >
        {" "}
        <ImagePlane
          id={0}
          product={products[1]}
          rotation={[0, degToRad(90), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_3_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_3_Baked.geometry}
        material={materials.Frame_3_Baked}
        position={[-8.254, 2.229, -3.547]}
      >
        <ImagePlane
          id={0}
          product={products[2]}
          rotation={[0, degToRad(90), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_4_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_4_Baked.geometry}
        material={materials.Frame_4_Baked}
        position={[-8.254, 2.229, -7.471]}
      >
        <ImagePlane
          id={0}
          product={products[3]}
          rotation={[0, degToRad(90), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_5_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_5_Baked.geometry}
        material={materials.Frame_5_Baked}
        position={[-8.254, 2.229, -11.494]}
      >
        <ImagePlane
          id={0}
          product={products[4]}
          rotation={[0, degToRad(90), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_6_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_6_Baked.geometry}
        material={materials.Frame_6_Baked}
        position={[8.453, 2.229, 4.4]}
      >
        {" "}
        <ImagePlane
          id={0}
          product={products[5]}
          rotation={[0, degToRad(270), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[-0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_7_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_7_Baked.geometry}
        material={materials.Frame_7_Baked}
        position={[8.453, 2.229, 0.476]}
      >
        {" "}
        <ImagePlane
          id={0}
          product={products[6]}
          rotation={[0, degToRad(270), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[-0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_8_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_8_Baked.geometry}
        material={materials.Frame_8_Baked}
        position={[8.453, 2.229, -3.547]}
      >
        <ImagePlane
          id={0}
          product={products[7]}
          rotation={[0, degToRad(270), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[-0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_9_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_9_Baked.geometry}
        material={materials.Frame_9_Baked}
        position={[8.453, 2.229, -7.471]}
      >
        {" "}
        <ImagePlane
          id={0}
          product={products[8]}
          rotation={[0, degToRad(270), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[-0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
      <mesh
        name="Frame_10_Baked"
        castShadow
        receiveShadow
        geometry={nodes.Frame_10_Baked.geometry}
        material={materials.Frame_10_Baked}
        position={[8.453, 2.229, -11.494]}
      >
        {" "}
        <ImagePlane
          id={0}
          product={products[9]}
          rotation={[0, degToRad(270), 0]}
          scale={[2.8, 2.8, 0.001]}
          position={[-0.15, 0, 0]}
          handleImageClick={handleImageClick}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/Frames_Final.glb");
